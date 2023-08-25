<?php

namespace App\Controllers\AdminUsers;

use App\DAO\VeroCard\AdminUsers\AdminUsersDAO;
use App\Models\AdminUsersModel;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class AdminUsersController
{

    public function getUsers(Request $request, Response $response, array $args): Response
    {

        $adminUsersDAO = new AdminUsersDAO();

        $adminUsersData = $adminUsersDAO->getAllUsers();

        $response = $response->withJson($adminUsersData);

        return $response;
    }

    public function createUsers(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();

        if (empty(trim($data['nome'])) ||  empty($data['senha']) || empty(trim($data['email'])) || empty(trim($data['admin']))) {

            try {
                throw new \Exception("Preencha todos o campos para fazer a requisição");
            } catch (\Exception | \Throwable $ex) {

                return $response->withJson([
                    'error' => \Exception::class,
                    'status' => 422,
                    'code' => "002",
                    'userMessage' => 'Campos vazios, preencha todos campos',
                    'developerMessage' => $ex->getMessage()
                ], 422);
            }
        }

        $adminUsersDAO = new AdminUsersDAO();

        $adminUsersModel = new AdminUsersModel();

        $adminUsersModel->setNome($data['nome'])->setSenha($data['senha'])->setEmail($data['email']);

        $adminUsersDAO->CreateUsers($adminUsersModel);

        $response = $response->withJson("Usuario inserido com sucesso");

        return $response;
    }

    public function editUsers(Request $request, Response $response, array $args): Response
    {

        $data = $request->getParsedBody();

        if (empty(trim($data['id'])) || empty(trim($data['nome'])) ||  empty($data['senha']) || empty(trim($data['email']))) {

            try {

                throw new \Exception("Preencha todos o campos para fazer a requisição");
            } catch (\Exception | \Throwable $ex) {

                return $response->withJson([
                    'error' => \Exception::class,
                    'status' => 422,
                    'code' => "002",
                    'userMessage' => 'Campos vazios, preencha todos campos',
                    'developerMessage' => $ex->getMessage()
                ], 422);
            }
        }

        $adminUsersDAO = new AdminUsersDAO();

        $adminUsersModel = new AdminUsersModel();

        $adminUsersModel->setId($data['id'])->setNome($data['nome'])->setEmail($data['email'])->setSenha($data['senha']);

        $adminUsersDAO->UpdateUsers($adminUsersModel);

        $response = $response->withJson('Usuario Atualizado com sucesso!');

        return $response;
    }

    public function deleteUsers(Request $request, Response $response, array $args): Response
    {
        $idUser = $args['id'];

        if (!$idUser) {

            try {

                throw new \Exception("Passe o id no argumento da requisição");
            } catch (\Exception | \Throwable $ex) {

                return $response->withJson([
                    'error' => \Exception::class,
                    'status' => 422,
                    'code' => "002",
                    'userMessage' => 'Passe o id no argumento da requisição',
                    'developerMessage' => $ex->getMessage()
                ], 422);
            }
        }

        $adminUsersDAO = new AdminUsersDAO();

        $adminUsersModel = new AdminUsersModel();

        $adminUsersDAO-> DeleteUsers($idUser);

        $response = $response->withJson("Usuario deletado com sucesso");

        return $response;

    }
}

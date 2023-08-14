<?php

namespace App\Controllers\AdminUsers;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class AdminUsersController
{   

    public function getUsers(Request $request, Response $response, array $args): Response
    {
        
        $response = $response -> withJson('getUsers');

        return $response;

    }

    public function createUsers(Request $request, Response $response, array $args): Response
    {
        
        $response = $response -> withJson('createUsers');

        return $response;
    }

    public function editUsers(Request $request, Response $response, array $args): Response
    {    
        $response = $response -> withJson('editUsers');

        return $response;
    }

    public function deleteUsers(Request $request, Response $response, array $args): Response
    {
        
        $response = $response -> withJson('deleteUsers');

        return $response;
    }

}

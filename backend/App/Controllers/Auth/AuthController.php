<?php

namespace App\Controllers\Auth;
use App\DAO\VeroCard\Tokens\TokensDAO;
use App\DAO\VeroCard\Users\UsersDAO;
use App\Models\TokenModel;
use Firebase\JWT\JWT;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Http\Response as Response;

final class AuthController
{   

    public function login(Request $request, Response $response, array $args): Response
    {
        $data = $request -> getParsedBody();

        $email = $data['email'];

        $password = $data['senha'];

        if(!trim($email) || !$password){
            try{

                throw new \Exception("O email e a senha não foi passado na requisição");

            }catch(\Exception | \Throwable $ex){

                return $response -> withJson([
                    'error' => \Exception::class,
                    'status' => 400,
                    'code' => "002",
                    'userMessage' => 'Dados nulos, passe o email e a senha',
                    'developerMessage' => $ex -> getMessage()
                ] , 401);

            }
        }

        $expiredDate = (new \DateTime('now', new \DateTimeZone('America/Sao_Paulo')))->modify('+7 hours')->format('Y-m-d H:i:s');

        $userDAO = new UsersDAO();

        $user = $userDAO -> getUserbyEmail($email);

        if(is_null($user) || $password  != $user -> getSenha()){
            try{

                throw new \Exception("Não autorizado!");

            }catch(\Exception | \Throwable $ex){

                return $response -> withJson([
                    'error' => \Exception::class,
                    'status' => 400,
                    'code' => "002",
                    'userMessage' => 'Email ou senha incorretos',
                    'developerMessage' => $ex -> getMessage()
                ] , 401);

            }
        }

        $tokenPayload = [
            'sub' => $user -> getId(),
            'name' => $user -> getNome(),
            'email' => $user -> getEmail(),
            'admin' => $user -> getAdmin(),
            'expired_at' => $expiredDate
        ];

        $token = JWT::encode($tokenPayload , getenv('JWT_SECRET_KEY'));

        $refreshTokenPayload = [
            'email' => $user -> getEmail(),
            'ramdom' => uniqid()
        ];
        $refreshToken = JWT::encode($refreshTokenPayload , getenv('JWT_SECRET_KEY'));

        $tokenModel = new TokenModel();

        $tokenModel -> setExpired_at($expiredDate)
                    -> setRefresh_token($refreshToken)
                    -> setToken($token)
                    -> setUsuarios_id($user -> getId());


        $tokensDAO = new TokensDAO();

        $tokensDAO -> createToken($tokenModel);
            
        $response = $response -> withJson([
                'token' => $token,
                'refresh_token' => $refreshToken,
                'admin' => $user -> getAdmin()
        ]);
        
        return $response;

    }

    public function refreshToken(Request $request , Response $response , array $args) : Response {

        $data = $request -> getParsedBody();

        $refreshtoken = $data['refresh_token'];

        $expiredDate = (new \DateTime('now', new \DateTimeZone('America/Sao_Paulo')))->modify('+7 hours')->format('Y-m-d H:i:s');

        $tokensDAO = new TokensDAO();
        
        $refreshTokenExists = $tokensDAO->verifyRefreshToken($refreshtoken);

        if (!$refreshTokenExists) {
            try{
                throw new \Exception("Token de refresh inesxistente ou invalido");

            }catch(\Exception | \Throwable $ex){

                return $response -> withJson([
                    'error' => \Exception::class,
                    'status' => 400,
                    'code' => "002",
                    'userMessage' => 'Você não está autorizado tente novamente mais tarde',
                    'developerMessage' => $ex -> getMessage()
                ] , 401);

            }
        }

        $tokensDAO->DeleteTokens($refreshtoken);

        $refreshTokenDecoded = JWT::decode(
            $refreshtoken,
            getenv('JWT_SECRET_KEY'), ['HS256']
         ); 

         $usuarioDAO = new UsersDAO();

         $user = $usuarioDAO -> getUserbyEmail($refreshTokenDecoded -> email);

         if(is_null($user))
            return $response -> withStatus(401);


            $tokenPayload = [
                'sub' => $user -> getId(),
                'name' => $user -> getNome(),
                'email' => $user -> getEmail(),
                'expired_at' => $expiredDate
            ];
    
            $token = JWT::encode($tokenPayload , getenv('JWT_SECRET_KEY'));
    
            $refreshTokenPayload = [
                'email' => $user -> getEmail(),
                'ramdom' => uniqid()
            ];
    
            $refreshToken = JWT::encode($refreshTokenPayload , getenv('JWT_SECRET_KEY'));
    
            $tokenModel = new TokenModel();
    
            $tokenModel -> setExpired_at($expiredDate)
                        -> setRefresh_token($refreshToken)
                        -> setToken($token)
                        -> setUsuarios_id($user -> getId());
    
            $tokensDAO = new TokensDAO();
    
            $tokensDAO -> createToken($tokenModel);
    
            $response = $response -> withJson([
                'token' => $token,
                'refresh_token' => $refreshToken
            ]);

            return $response;

    }


}

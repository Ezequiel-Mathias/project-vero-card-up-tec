<?php

use function src\jwtAuth;
use function src\slimConfiguration;
use App\Controllers\AuthController;
use App\Middlewares\jwtDateTime;

$app = new \Slim\App(slimConfiguration()); 

// =======================================

$app -> post('/login' , AuthController::class . ':login');

$app -> post('/refresh-token' , AuthController::class . ':refreshToken');

$app -> get('/decodfy' , function($request , $response) {
    var_dump($request -> getAttribute('jwt'));
}) -> add(new jwtDateTime())
-> add(jwtAuth());

// =======================================


$app -> run();

?>

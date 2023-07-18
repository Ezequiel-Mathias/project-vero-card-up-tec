<?php

use function src\jwtAuth;
use function src\slimConfiguration;
use App\Controllers\Auth\AuthController;
use App\Controllers\Production\ProductionController;
use App\Controllers\AwaitingRelease\AwaitingReleaseController;
use App\Middlewares\jwtDateTime;

$app = new \Slim\App(slimConfiguration()); 

// ================= Login ========================

$app -> post('/login' , AuthController::class . ':login');

$app -> post('/refresh-token' , AuthController::class . ':refreshToken');

$app -> get('/decodfy' , function($request , $response) {
    var_dump($request -> getAttribute('jwt'));
}) -> add(new jwtDateTime())
-> add(jwtAuth());

// ================================================


// ================== Production ==================

 $app -> get('/production' , ProductionController::class . ':Productsinproduction')
 -> add(new jwtDateTime())
 -> add(jwtAuth());

// =================================================


// ================== Awaiting release =============

$app -> get('/awaiting-release' , AwaitingReleaseController::class . ':AwaitingRelease')
-> add(new jwtDateTime())
-> add(jwtAuth());


// ==================================================





$app -> run();

?>

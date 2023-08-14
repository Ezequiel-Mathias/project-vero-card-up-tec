<?php

use function src\jwtAuth;
use function src\slimConfiguration;
use App\Controllers\AdminUsers\AdminUsersController;
use App\Controllers\Auth\AuthController;
use App\Controllers\Production\ProductionController;
use App\Controllers\AwaitingRelease\AwaitingReleaseController;
use App\Controllers\ProductionReport\ProductionReportController;
use App\Controllers\Stock\StockController;
use App\Middlewares\jwtDateTime;

$app = new \Slim\App(slimConfiguration()); 

// ================= Login ========================

$app -> post('/login' , AuthController::class . ':login');

$app -> post('/refresh-token' , AuthController::class . ':refreshToken');

$app -> post('/decodfy' , function($request , $response) {
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


// ================== Production Report =============

$app -> post('/production-report' , ProductionReportController::class . ':ProductionReport')
-> add(new jwtDateTime())
-> add(jwtAuth());

// ==================================================


// ================== Stock =============

$app -> post('/stock' , StockController::class . ':StockFilter')
-> add(new jwtDateTime())
-> add(jwtAuth());

// ==================================================



// ================== Users =============

$app -> get('/users' , AdminUsersController::class . ':getUsers')
-> add(new jwtDateTime())
-> add(jwtAuth());

$app -> post('/users' , AdminUsersController::class . ':createUsers')
-> add(new jwtDateTime())
-> add(jwtAuth());

$app -> put('/users' , AdminUsersController::class . ':editUsers')
-> add(new jwtDateTime())
-> add(jwtAuth());

$app -> delete('/users' , AdminUsersController::class . ':deleteUsers')
-> add(new jwtDateTime())
-> add(jwtAuth());
// ==================================================

$app -> run();

?>

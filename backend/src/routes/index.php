<?php

use function src\slimConfiguration;
use App\Controllers\ProductController;

    

$app = new \Slim\App(slimConfiguration()); 

// =======================================

$app-> get('/teste' , ProductController::class . ':getProducts');


// =======================================


$app -> run();

?>

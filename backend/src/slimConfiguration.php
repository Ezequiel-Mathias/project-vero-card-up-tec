<?php

//configuração do slim erros e require na index !
namespace src;

function slimConfiguration(): \Slim\Container{
    $configuration = [
        'settings' => [
            'displayErrorDetails' => getenv('DISPLAY_ERRORS_DETAILS'),
        ],
    ];
    $container = new \Slim\Container($configuration);

    return $container;
}

?>
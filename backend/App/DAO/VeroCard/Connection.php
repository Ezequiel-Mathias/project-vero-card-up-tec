<?php

namespace App\DAO\VeroCard;

abstract class Connection{

    /**
     * @var \PDO
     */

     protected $pdo;

     public function __construct()
     {
         $host = getenv('UPTECHNOLOGY1_PG_HOST');
         $port = getenv('UPTECHNOLOGY1_PG_PORT');
         $user = getenv('UPTECHNOLOGY1_PG_USER');
         $pass = getenv('UPTECHNOLOGY1_PG_PASSWORD');
         $dbname = getenv('UPTECHNOLOGY1_PG_DBNAME');
 
         $dsn = "pgsql:host={$host};dbname={$dbname};port={$port}";
 
         $this -> pdo = new \PDO($dsn , $user , $pass);
 
         $this -> pdo -> setAttribute(
             \PDO::ATTR_ERRMODE,
             \PDO::ERRMODE_EXCEPTION
         );
         
     }

}


?>
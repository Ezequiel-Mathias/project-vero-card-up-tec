<?php

namespace App\Models;

final class UsersModel
{

     /**
      * @var int
      */
     private $id;

     /**
      * @var string
      */
     private $nome;

     /**
      * @var string
      */
     private $email;

     /**
      * @var string
      */

     private $senha;

     /**
      * @var int
      */
     private $admin;


     public function getId(): int
     {
          return $this->id;
     }

     public function setId(int $id): UsersModel
     {

          $this->id = $id;

          return $this;
     }

     public function getNome(): string
     {

          return $this->nome;
     }

     public function setNome(string $nome): UsersModel
     {

          $this->nome = $nome;

          return $this;
     }

     public function getEmail(): string
     {

          return $this->email;
     }

     public function setEmail(string $email): UsersModel
     {

          $this->email = $email;

          return $this;
     }

     public function getSenha(): string
     {

          return $this->senha;
     }

     public function setSenha(string $senha): UsersModel
     {

          $this->senha = $senha;

          return $this;
     }

     public function getAdmin(): string
     {
          return $this->admin;
     }

     public function setAdmin(string $admin): UsersModel
     {
          $this->admin = $admin;

          return $this;
     }
}

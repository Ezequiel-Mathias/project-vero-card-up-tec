<?php

namespace App\DAO\VeroCard\AdminUsers;
use App\DAO\VeroCard\Connection;
use App\Models\AdminUsersModel;

class AdminUsersDAO extends Connection{

    public function __construct()
    {
        parent::__construct();
    }

    public function getAllUsers() : array{

        $statement = $this -> pdo
            ->query ("SELECT * from usuarios_vero_card;") 
            ->fetchAll(\PDO::FETCH_ASSOC);

            return $statement;
    }

    public function CreateUsers(AdminUsersModel $usersModel){

        $statement = $this -> pdo
         ->prepare("INSERT INTO usuarios_vero_card (nome , email , senha) VALUES (:nome , :email , :senha);");

        $statement->execute([
        'nome' => $usersModel-> getNome() ,
        'email' => $usersModel -> getEmail(), 
        'senha' => $usersModel -> getSenha() ]);

    }

    public function UpdateUsers(AdminUsersModel $usersModel){

        $statement = $this -> pdo
         ->prepare("UPDATE usuarios_vero_card SET nome=:nome,  email=:email, senha=:senha  WHERE id = :id;");

        $statement->execute([
        'id' => $usersModel -> getId(),   
        'nome' => $usersModel-> getNome() ,
        'email' => $usersModel -> getEmail(), 
        'senha' => $usersModel -> getSenha()]);

    }

    public function DeleteUsers($idUser){

        $deleteTokenLogs = $this -> pdo
         ->prepare("DELETE from tokens_vero_card WHERE usuarios_id = :idUser;");

        $deleteTokenLogs->execute([
        'idUser' => $idUser]);

        $deleteUser = $this -> pdo
         ->prepare("DELETE from usuarios_vero_card WHERE id = :idUser;");

        $deleteUser->execute([
        'idUser' => $idUser]);

    }

}

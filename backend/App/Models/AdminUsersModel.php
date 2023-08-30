<?php

namespace App\Models;

final class AdminUsersModel
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
     * @var string
     */
    private $admin;
     

    public function getId(): string
    {
        return $this->id;
    }

    public function setId(string $id): AdminUsersModel
    {
        $this->id = $id;

        return $this;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function setNome(string $nome): AdminUsersModel
    {

        $this->nome = $nome;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): AdminUsersModel
    {

        $this->email = $email;

        return $this;
    }

    public function getSenha(): string
    {
        return $this->senha;
    }

    public function setSenha(string $senha): AdminUsersModel
    {

        $this->senha = $senha;

        return $this;
    }

    public function getAdmin(): string
    {
        return $this->admin;
    }

    public function setAdmin(string $admin): AdminUsersModel
    {

        $this->admin = $admin;

        return $this;
    }

    
}

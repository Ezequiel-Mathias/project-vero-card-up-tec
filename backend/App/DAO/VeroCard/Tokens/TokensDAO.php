<?php

namespace App\DAO\VeroCard\Tokens;
use App\DAO\VeroCard\Connection;
use App\Models\TokenModel;

class TokensDAO extends Connection{

    public function __construct()
    {
        parent::__construct();
    }

    public function createToken(TokenModel $token) : void {

        $statement = $this -> pdo
            -> prepare("INSERT INTO tokens_vero_card(usuarios_id , token , refresh_token , expired_at) 
            VALUES (:usuarios_id, :token , :refresh_token , :expired_at );
            ");

        $statement -> execute([
            'usuarios_id' => $token -> getUsuarios_id(),
            'token' => $token -> getToken(),
            'refresh_token' => $token -> getRefresh_token(),
            'expired_at' => $token -> getExpired_at(),
        ]);
    }


    public function VerifyRefreshToken(string $refreshToken) : bool {

        $statement = $this->pdo
            ->prepare("SELECT
                    id
                FROM tokens_vero_card
                WHERE refresh_token = :refresh_token;
            ");

        $statement->bindParam('refresh_token', $refreshToken);
        $statement->execute();
        $tokens = $statement->fetchAll(\PDO::FETCH_ASSOC);
        
        return count($tokens) === 0 ? false : true;

    }

    public function DeleteTokens(string $refreshToken) : void {
        
        $statement = $this->pdo
            ->prepare("DELETE FROM tokens_vero_card WHERE refresh_token = :refresh_token;");

        $statement->bindParam('refresh_token', $refreshToken);
        $statement->execute();

    }


}
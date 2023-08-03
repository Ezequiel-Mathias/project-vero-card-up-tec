<?php
namespace App\DAO\VeroCard\Production;
use App\DAO\VeroCard\Connection;


class ProductionDAO extends Connection{

    public function __construct()
    {
        parent::__construct();
    }

    public function getAllProductsInProduction() : array {
        $products = $this -> pdo
            ->query("SELECT a.id_op,
            c.nome_arquivo,
            a.qtd_objs, 
            CASE
              WHEN a.idlayoutarquivo = 50 THEN 'CHIP'::text
              WHEN a.idlayoutarquivo = 76 THEN 'TARJA'::text
              ELSE NULL::text
            END AS tipo,
            to_char(a.dt_op, 'DD/MM/YYYY') AS dt_op,
            a.nr_lote,
            (
              SELECT ordem_producao_status.dt_finalizado
              FROM ordem_producao_status
              WHERE ordem_producao_status.id_op = a.id_op AND
                    ordem_producao_status.status = 4 AND
                    ordem_producao_status.finalizado = 0
            ) AS dt_expedicao
     FROM ordem_producao a
          JOIN ordem_producao_status b ON a.id_op = b.id_op
          JOIN ordem_producao_detalhe c ON a.id_op = c.id_op 
    WHERE a.id_cliente = 34 GROUP BY a.id_op , a.dt_op , c.nome_arquivo,  a.qtd_objs ORDER BY a.dt_op DESC LIMIT 100;")->fetchAll(\PDO::FETCH_ASSOC);

            return $products;
    }
}

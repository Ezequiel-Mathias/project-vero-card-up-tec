import React, { useContext } from "react";
import { Context } from "../../AuthContext/AuthContext";
import Button from "../../components/shared/Button";
import NavBarClient from "../../components/layout/NavBarClient";


const PageHome: React.FC = () => {

    const { handleLogout }: any = useContext(Context);

    return (
        <div className="container-page-home">
            
            <NavBarClient titles={
                [ <a href="">Home</a> , 
                <a href="">Relatorio de Produção</a> , 
                <a href="">Estoque</a> , 
                <a href="">Admin Users</a> , 
                <a href="">Cartões Emitidos</a>]
                }/>

            <div className="image-logo-up">
                <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/LogoUP.svg?alt=media&token=a4d9e086-9cc7-4d6d-846d-875f2858b698' alt="Logo up" />
            </div>


            <div className="container-table">

                <div className="table">
                        
                    <div className="title-table">
                        <h3>Em Produção</h3>
                    </div>
                    <div className="column-table">
                          <span>Produto</span>
                          <span>Número op</span>
                          <span>Data</span>
                          <span>Qtd Objs</span>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default PageHome;
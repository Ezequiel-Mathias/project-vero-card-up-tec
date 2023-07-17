import React, { useContext } from "react";
import { Context } from "../../AuthContext/AuthContext";
import Button from "../../components/shared/Button";
import NavBarClient from "../../components/layout/NavBarClient";
import { Link } from "react-router-dom";


const PageHome: React.FC = () => {

    const { handleLogout }: any = useContext(Context);

    return (
        <div className="container-page-home">

            <NavBarClient titles={
                [<Link to={`${process.env.PUBLIC_URL}/home`}>Home</Link>    ,
                <Link to={`${process.env.PUBLIC_URL}/relatorio-producao`}>Relatorio de Produção</Link>,
                <Link to={`${process.env.PUBLIC_URL}/estoque`}>Estoque</Link>,
                <Link to={`${process.env.PUBLIC_URL}/usuarios`}>Admin Users</Link>,
                <Link to={`${process.env.PUBLIC_URL}/emitidos`}>Cartões Emitidos</Link>]
            } />

            <div className="image-logo-up">
                <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/LogoUP.svg?alt=media&token=a4d9e086-9cc7-4d6d-846d-875f2858b698' alt="Logo up" />
            </div>


            <div className="container-table">

                <div className="table">

                    <div className="title-table">
                        <h3>Em Produção</h3>
                    </div>
                    <div className="container-column-table">

                        <div className="title-column">
                            <span>Produto</span>
                            <span>Número op</span>
                            <span>Data</span>
                            <span>Qtd Objs</span>
                        </div>

                        <div className="rows-table">
                            <span>Vero Card</span>
                            <span>111111</span>
                            <span>28/02/2023</span>
                            <span>9000</span>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default PageHome;
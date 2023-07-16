import React, { useContext } from "react";

import { Context } from "../../AuthContext/AuthContext";
import Button from "../../components/Button";


const PageHome: React.FC = () => {

    const { handleLogout }: any = useContext(Context);

    return (
        <div className="container-page-home">
            <header>
                <div className="image-logo-client-white">
                    <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/Logo-Vero-Card-White.png?alt=media&token=f6ec1ceb-9e8e-4098-b969-d379b50811a8' alt="Logo up" />

                </div>
                <nav>
                    <ul className="nav-list">
                        <li>Home</li>
                        <li>Relatório de produção</li>
                        <li>Estoque</li>
                        <li>Admin users</li>
                        <li>Cartões emitidos</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default PageHome;
import React from "react";
import NavBarClient from "../NavBarClient";

interface IDefaultHeader {
    sessionTheme?: string
}
const DefaultHeader: React.FC<IDefaultHeader> = ({ sessionTheme }) => {

    return (
        <div className="container-default-header">
            <NavBarClient />

            <div className="image-logo-up">
                <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/Logo-up-sem-fundo.png?alt=media&token=bd042517-7333-40ba-a87d-1998b1f382a7' alt="Logo up" />
            </div>

            <div className="title-session">
                {sessionTheme &&
                    <h2>{sessionTheme}</h2>
                }
            </div>


        </div>
    )
}

export default DefaultHeader
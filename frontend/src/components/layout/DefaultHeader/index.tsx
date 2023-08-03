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
                <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/LogoUP.svg?alt=media&token=a4d9e086-9cc7-4d6d-846d-875f2858b698' alt="Logo up" />
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
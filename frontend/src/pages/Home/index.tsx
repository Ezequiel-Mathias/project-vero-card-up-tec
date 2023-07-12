import React , {useContext} from "react";

import {Context} from "../../AuthContext/AuthContext";
import Button from "../../components/Button";


const PageHome: React.FC = () => {

    const {handleLogout} : any = useContext(Context); 

    return (
        <div><h1>Page Home </h1> <Button text="SAIR" onClick={handleLogout} /></div>
    )
}

export default PageHome;
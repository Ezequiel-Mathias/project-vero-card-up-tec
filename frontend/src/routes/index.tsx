import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider, Context } from '../AuthContext/AuthContext';
import PrivateRouter from "./private.routes";
import PublicRouter from "./public.routes";


const Routing: React.FC = () => {



    return (
        <BrowserRouter>
            <AuthProvider>
                <PrivateRouter />
                <PublicRouter />      
            </AuthProvider>
        </BrowserRouter>

    )
}

export default Routing
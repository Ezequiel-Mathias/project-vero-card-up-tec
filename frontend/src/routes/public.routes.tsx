import PageLoguin from '../pages/Login';
import { Route, Routes , Navigate, Outlet} from "react-router-dom";
import { AuthProvider, Context } from '../AuthContext/AuthContext';
import { useContext } from "react";


const PublicRouter: React.FC = () => {

    const { authenticated, handleLogin }: any = useContext(Context);

    return (
        <>
            {
                !authenticated || authenticated ?
                    <Routes>
                        <Route index path="/" element={<PageLoguin />} />
                        <Route path="*" element={<Outlet/>} />
                    </Routes>
                    :
                    null
            }
        </>


    )

}


export default PublicRouter;
import PageLoguin from '../pages/Login';
import { Route, Routes , Navigate, Outlet} from "react-router-dom";
import { AuthProvider, Context } from '../AuthContext/AuthContext';
import { useContext } from "react";
import PageHome from '../pages/Home';



const PublicRouter: React.FC = () => {

    const { authenticated, handleLogin }: any = useContext(Context);

    return (
        <>
            {
                !authenticated || authenticated ?
                    <Routes>
                        <Route index path={`${process.env.PUBLIC_URL}/`} element={<PageLoguin />} />
                        < Route path={`${process.env.PUBLIC_URL}/home`} element={< PageHome />} />
                        <Route path={`${process.env.PUBLIC_URL}*`} element={<Outlet/>} />
                    </Routes>
                    :
                    null
            }
        </>


    )

}


export default PublicRouter;
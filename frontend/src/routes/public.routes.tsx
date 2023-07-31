import PageLoguin from '../pages/Login';
import { Route, Routes , Navigate, Outlet} from "react-router-dom";
import { AuthProvider, Context } from '../AuthContext/AuthContext';
import { useContext } from "react";
import PageHome from '../pages/Home';
import PageProductionReport from '../pages/ProductionReport';
import PageStock from '../pages/Stock';
import PageUsers from '../pages/Users';
import PageCardsIssued from '../pages/CardsIssued';



const PublicRouter: React.FC = () => {

    const { authenticated, handleLogin }: any = useContext(Context);

    return (
        <>
            {
                !authenticated || authenticated ?
                    <Routes>
                        <Route index path={`${process.env.PUBLIC_URL}/`} element={<PageLoguin />} />
                        < Route path={`${process.env.PUBLIC_URL}/relatorio-producao`} element={< PageProductionReport />} />
                        < Route path={`${process.env.PUBLIC_URL}/estoque`} element={< PageStock />} />
                        < Route path={`${process.env.PUBLIC_URL}/usuarios`} element={< PageUsers />} />
                        < Route path={`${process.env.PUBLIC_URL}/emitidos`} element={< PageCardsIssued />} />
                        <Route path={`${process.env.PUBLIC_URL}*`} element={<Outlet/>} />
                    </Routes>
                    :
                    null
            }
        </>


    )

}


export default PublicRouter;
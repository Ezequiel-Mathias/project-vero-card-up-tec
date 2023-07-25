import PageHome from '../pages/Home';
import PageProductionReport from '../pages/ProductionReport';
import { useContext } from "react";
import PageStock from '../pages/Stock';
import PageCardsIssued from '../pages/CardsIssued';
import PageUsers from '../pages/Users';
import { Route, Routes , Outlet} from 'react-router-dom';
import { Context } from '../AuthContext/AuthContext';




const PrivateRouter: React.FC = () => {

    const { authenticated, handleLogin }: any = useContext(Context);

    
    return (
        <>
            {
                authenticated ?
                    <Routes>
                        
                        < Route path={`${process.env.PUBLIC_URL}/relatorio-producao`} element={< PageProductionReport />} />
                        < Route path={`${process.env.PUBLIC_URL}/estoque`} element={< PageStock />} />
                        < Route path={`${process.env.PUBLIC_URL}/usuarios`} element={< PageUsers />} />
                        < Route path={`${process.env.PUBLIC_URL}/emitidos`} element={< PageCardsIssued />} />
                        <Route path={`${process.env.PUBLIC_URL}*`} element={<Outlet/>} />
                    </Routes >
                    :

                    null
            }
        </>





    )
}

export default PrivateRouter;
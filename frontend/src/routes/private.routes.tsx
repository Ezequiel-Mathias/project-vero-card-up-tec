import PageHome from '../pages/Home';
import PageProductionReport from '../pages/ProductionReport';
import { useContext } from "react";
import PageStock from '../pages/Stock';
import PageCardsIssued from '../pages/CardsIssued';
import PageUsers from '../pages/Users';
import { Route, Routes , Navigate , Outlet} from 'react-router-dom';
import { AuthProvider, Context } from '../AuthContext/AuthContext';
import PageLoguin from '../pages/Login';



const PrivateRouter: React.FC = () => {

    const { authenticated, handleLogin }: any = useContext(Context);

    
    return (
        <>
            {
                authenticated ?
                    <Routes>
                        < Route path="home" element={< PageHome />} />
                        < Route path="relatorio-producao" element={< PageProductionReport />} />
                        < Route path="estoque" element={< PageStock />} />
                        < Route path="usuarios" element={< PageUsers />} />
                        < Route path="emitidos" element={< PageCardsIssued />} />
                        <Route path="*" element={<Outlet/>} />
                    </Routes >
                    :

                    null
            }
        </>





    )
}

export default PrivateRouter;
import PageHome from '../pages/Home';
import PageProductionReport from '../pages/ProductionReport';
import { useContext } from "react";
import PageStock from '../pages/Stock';
import PageCardsIssued from '../pages/CardsIssued';
import PageUsers from '../pages/Users';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Context } from '../AuthContext/AuthContext';




const PrivateRouter: React.FC = () => {

    const { authenticated }: any = useContext(Context);
    const { authenticatedAdmin }: any = useContext(Context);


    return (
        <>
            {
                authenticated ?
                    <Routes>
                        < Route path={`${process.env.PUBLIC_URL}/home`} element={< PageHome />} />
                        < Route path={`${process.env.PUBLIC_URL}/relatorio-producao`} element={< PageProductionReport />} />
                        < Route path={`${process.env.PUBLIC_URL}/estoque`} element={< PageStock />} />

                        {authenticatedAdmin ?
                            <>
                                < Route path={`${process.env.PUBLIC_URL}/usuarios`} element={< PageUsers />} />
                               {/*  < Route path={`${process.env.PUBLIC_URL}/emitidos`} element={< PageCardsIssued />} /> */}

                            </>

                            :
                            null
                        }



                        <Route path={`${process.env.PUBLIC_URL}*`} element={<Outlet />} />
                    </Routes >
                    :

                    null
            }
        </>





    )
}

export default PrivateRouter;
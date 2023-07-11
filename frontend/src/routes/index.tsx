import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoguin from '../pages/Login';
import PageHome from '../pages/Home';
import PageProductionReport from '../pages/ProductionReport';
import PageStock from '../pages/Stock';
import PageCardsIssued from '../pages/CardsIssued';
import PageUsers from '../pages/Users';


const Routing: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes> 
                    <Route index element={<PageLoguin />} />
                    <Route path="home" element={<PageHome />} />
                    <Route path="relatorio-producao" element={<PageProductionReport />} />
                    <Route path="estoque" element={<PageStock />} />
                    <Route path="usuarios" element={<PageUsers />} />
                    <Route path="emitidos" element={<PageCardsIssued />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing
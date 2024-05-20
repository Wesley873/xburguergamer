import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../views/pages/home/App';
import Detalhes from '../views/pages/detalhes/Detalhes';
import Buscar from '../views/pages/buscar/Buscar';
import Ofertas from '../views/pages/ofertas/Ofertas';
import Pedido from '../views/pages/pedido/Pedido';
import Erro from '../views/pages/erro/Erro';
import MeusDados from '../views/pages/meusdados/MeusDados';
import FormasPagamento from '../views/pages/formaspagamento/FormasPagamento';
import Conifugracoes from '../views/pages/configuracoes/Configuracoes';
import Historico from '../views/pages/historico/Historico';



function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="/buscar" element={<Buscar />} />
                <Route path="/ofertas" element={<Ofertas />} />
                <Route path="/pedido" element={<Pedido />} />
                <Route path="/meusdados" element={<MeusDados />} />
                <Route path="/formaspagamento" element={<FormasPagamento />} />
                <Route path="/configuracoes" element={<Conifugracoes />} />
                <Route path="/historico" element={<Historico />} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;
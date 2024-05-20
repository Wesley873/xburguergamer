import { Link } from 'react-router-dom';
import './Configuracoes.css';

export default function Configuracoes() {
    return(
        <div>
            <h1>Configurações</h1>
            <p>Aqui será exibido as configurações do sistema</p>
            <p>O cliente poderá alterar as configurações do sistema</p>
            <p>Esquema de cores, Histórico de pedidos senhas</p>
            <Link to='/'>
                <button>Voltar</button>
            </Link>
        </div>
    )
};
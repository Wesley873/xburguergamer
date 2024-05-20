
import { Link } from 'react-router-dom';
import './Historico.css';

export default function Historico() {
    return(
        <div>
            <h1>Historico</h1>
            <p>Aqui será exibido o histórico de pedidos do cliente</p>
            <p>Ele poderá colocar os itens de pedidos antigos em um novo pedido</p>
            <p>Repitir pedido com um clique</p>

            <Link to='/'>Voltar para a Home</Link>
        </div>
    )
};
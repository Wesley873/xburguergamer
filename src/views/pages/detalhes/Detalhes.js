import { useParams } from "react-router-dom";
import './Detalhes.css';
import Lanches from "../../../configs/Lanches";
import lanche1 from '../../images/xburguergamer.png';

function adicionarPedido(lanche) {
    let pedido = JSON.parse(localStorage.getItem('pedido'));
    pedido.push(lanche);
    localStorage.setItem('pedido', JSON.stringify(pedido));
}

localStorage.setItem('pedido', JSON.stringify([]));


export default function Detalhes (){

    const { id } = useParams();
    const lanches = new Lanches();
    const lanche = lanches.lista.find(lanche => lanche.id === parseInt(id));
    console.log(lanche);
    return (
        <div>
            <h1>{lanche.title}</h1>
            <img src={lanche1} alt={lanche.photo} />
            <p>{lanche.description}</p>
            <p>{lanche.price}</p>
            <input type="button" value={"Voltar"} onClick={() => window.history.back()} />
            <input type="button" value={"Adicionar ao pedido"} onClick={() => adicionarPedido(id)} />
            
        </div>
    );
}
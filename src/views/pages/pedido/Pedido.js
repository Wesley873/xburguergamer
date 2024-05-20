import './Pedido.css';
import Lanches from '../../../configs/Lanches';
import { useState } from 'react';

export default function Pedido() {

    const lanches = new Lanches();
    const [pedido, setPedido] = useState(JSON.parse(localStorage.getItem('pedido')));

    return (
        <div>
            <h1>Pedido</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Subtotal</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pedido && pedido.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{lanches.lista.find(lanche => lanche.id === item.id).title}</td>
                                <td>{item.quantidade}</td>
                                <td>{lanches.lista.find(lanche => lanche.id === item.id).price}</td>
                                <td>{(item.quantidade * lanches.lista.find(lanche => lanche.id === item.id).price.replace('R$ ', '').replace(',', '.')).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => {
                                        const novoPedido = pedido.filter(pedidoItem => pedidoItem.id !== item.id);
                                        setPedido(novoPedido);
                                        localStorage.setItem('pedido', JSON.stringify(novoPedido));
                                    }}>Excluir</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* <ul>
                <li>Aqui será exibida a lista de itens adicionados ao pedido</li>
                <li>permitirá editar o pedido excluir itens</li>
                <li>Adicionar cupons de desconto</li>
                <li>realizar o pagamento e finalizar o pedido</li>

            </ul> */}
        </div>
    );
};
import { useLocation } from 'react-router-dom';

export default function Erro() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Erro 404</h1>
            <p>Página não encontrada</p>
            <p>Rota: {location.pathname}</p>
        </div>
    );
};
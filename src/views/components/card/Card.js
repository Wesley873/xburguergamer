import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({title, photo, description, price, id}) {
    return (
        <Link to={`/detalhes/${id}`}>
        <div className='card'>
            <div className='card-header'>
                <h3>{title}</h3>
            </div>
            <div>
                <img src={photo} alt='Imagem do lanche'/>
            </div>
            <div className='card-body'>
                <p>{description}</p>
            </div>
            <div className='card-footer'>
                <p>{price}</p>
            </div>
        </div>
        </Link>
    );
}
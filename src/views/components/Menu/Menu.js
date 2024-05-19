import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import iconHome from '../../icons/home.png';
import iconSearch from '../../icons/search.png';
import iconSell from '../../icons/sell.png';
import iconOrder from '../../icons/order.png';
import iconLunch from '../../icons/lunch.png';
import iconMenu from '../../icons/menu.png';
import iconPerson from '../../icons/manage_accounts.png';
import iconConfig from '../../icons/setting.png';
import iconAddCart from '../../icons/add_card.png';
import iconClose from '../../icons/close.png';
import logoOifical from '../../images/logo-oficial-90x90.png'
import logoGamer from '../../images/gamer-90x240.png'
import logoGamer2 from '../../images/gamer.png'

export default function GeneralMenu() {

    document.addEventListener('click', function (e) {
        if (e.target.id === 'menu') { activeSidebar() };
        if (e.target.id !== 'menu') { closeSidebar() }
    })

    function activeSidebar() {
        let sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('active');
    }
    function closeSidebar() {
        let sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('active');
    }


    return (
        <div>
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <h3>Menu</h3>
                    <img id="icon-person" className="icon" src={iconClose} alt='icone-home' />
                    {/* <h3>X</h3> */}
                </div>
                <div className='sidebar-body'>
                    <div className='list'><Link to='/'><img id="icon-person" className="icon" src={iconPerson} alt='icone-home' />Meus dados</Link></div>
                    <div className='list'><Link to='/ofertas'><img id="icon-home" className="icon" src={iconAddCart} alt='icone-home' />Formas de Pagamento</Link></div>
                    <div className='list'><Link to='/pedido'><img id="icon-home" className="icon" src={iconOrder} alt='icone-home' />link 4</Link></div>
                    <div className='list'><Link to='/buscar'><img id="icon-home" className="icon" src={iconConfig} alt='icone-home' />configurações</Link></div>
                </div>
            </div>
            <nav className='topbar'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logoOifical} alt='icon-lunch' className='icon' />
                        <h1>GAMER</h1>
                        {/* <img src={logoGamer2} alt='icon-lunch' className='icon-gamer' /> */}
                    </Link>
                </div>
                <div className='menu'>
                    <img src={iconMenu} alt='icon-menu' className='icon' id="menu" />
                </div>
            </nav>
            
            <div className="taskbar">
                <div className="icons-list">
                    <Link to='/'>
                        <img id="icon-home" className="icon" src={iconHome} alt='icone-home' />
                        <p>Inicio</p>
                    </Link>
                    <Link to='/buscar'>
                        <img id="icon-home" className="icon" src={iconSearch} alt='icone-home' />
                        <p>Buscar</p>
                    </Link>
                    <Link to='/ofertas'>
                        <img id="icon-home" className="icon" src={iconSell} alt='icone-home' />
                        <p>Ofertas</p>
                    </Link>
                    <Link to='/pedido'>
                        <img id="icon-home" className="icon" src={iconOrder} alt='icone-home' />
                        <p>Pedido</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};
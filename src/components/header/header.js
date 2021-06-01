import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav main-nav navbar bg-light justify-content-center'>
                <ul className='main-nav__list list nav'>
                    <li className='list__item nav-item'>
                        <Link 
                            to='/' 
                            className='nav-link'>
                            Главная
                        </Link>
                    </li>
                    <li className='list__item nav-item'>
                        <Link 
                            to='/stats' 
                            className='nav-link'>
                            Аналитика
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
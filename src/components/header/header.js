import React from 'react';

import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav main-nav navbar bg-light justify-content-center'>
                <ul className='main-nav__list list nav'>
                    <li className='list__item nav-item'>
                        <a href="/" className='nav-link'>Главная</a>
                    </li>
                    <li className='list__item nav-item'>
                        <a href="/" className='nav-link'>Статистика</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
//external
import React, { useState } from "react";
import classNames from "classnames";

//internal
import iconEarch from "@/img/logos/logo1.png";

const NavBar = () => {
    const [mobileNav, setmobileNav] = useState(false);

    const handleChanheMenu = () => {
        setmobileNav(!mobileNav);
    };

    return (
        <div className='nav-wrapper'>
            <nav className='navbar'>
                <img src={iconEarch} alt='Company Logo' />
                <div
                    className={classNames("menu-toggle ", {
                        "is-active": mobileNav,
                    })}
                    id='mobile-menu'
                    onClick={handleChanheMenu}
                >
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <ul
                    className={classNames("nav no-search", {
                        "mobile-nav": mobileNav,
                    })}
                >
                    <li className='nav-item'>
                        <a href='#'>Главная</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Новости</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Компания</a>
                    </li>
                    <li className='nav-item'></li>
                    <li className='nav-item button-reg'>
                        <a href='#'>Регистрация </a>
                    </li>
                    <li className='nav-item button-log'>
                        <a href='#'>Вход </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

//external
import React, { useState } from "react";
import classNames from "classnames";
//internal
import iconEarch from "@/img/logos/logo1.png";

const NavBar = () => {
    const [mobileNav, setmobileNav] = useState(false);
    // const [isActive, setisActive] = useState(false);

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
                        <a href='#'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Work</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Contact Us</a>
                    </li>
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

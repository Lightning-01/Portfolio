import React, {useState} from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";


const Header = ({ onMenuToggle }) => {
    const[Toggle, showMenu] = useState(false);

    const toggleMenu = () => {
        const newToggleState = !Toggle;
        showMenu(newToggleState);
        
        // Notify parent component about menu state change
        if (onMenuToggle) {
            onMenuToggle(newToggleState);
        }
    };

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Portfolio</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <HiOutlineHome className="nav__icon"/> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <HiOutlineUser className="nav__icon"/> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <HiOutlineBadgeCheck className="nav__icon"/> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <HiOutlinePhotograph className="nav__icon"/> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <HiOutlineMail className="nav__icon"/> Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={toggleMenu} />
                </div>
                <div className="nav__toggle" onClick={toggleMenu}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header
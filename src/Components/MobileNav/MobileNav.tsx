import React, { useState } from "react";
import style from "./MobileNav.module.scss";
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";
import menuImg from "../../assets/icon _hamburger_menu.svg";
import closeImg from "../../assets/close.svg";

const MobileNav = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        debugger;
        setMenuOpen(prevValue => !prevValue);
    };


    return (
        <div className={style.container}>
            <ul>
                <li>
                    <button aria-label="Open menu" onClick={handleMenu}>
                        <img src={menuImg} alt="Open menu" />
                    </button>
                </li>
                <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
            </ul>
            <div className={"Menu"}>
                <div className={menuOpen ? "opened" : ""}>
                    <button aria-label="Close menu" onClick={handleMenu}>
                        <img src={closeImg} alt="Close menu" />
                    </button>
                    <ul>
                        <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
                        <li> <a href="/">Home</a> </li>
                        <li> <a href="/#about">About</a> </li>
                        <li> <a href="/#menu">Menu</a> </li>
                        <li> <a href="/bookings">Reservations</a> </li>
                        <li className="orderBtn"> <a role="buthrefn" href="#">Order Online</a> </li>
                        <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default MobileNav;
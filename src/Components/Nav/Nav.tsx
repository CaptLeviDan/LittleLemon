import React from 'react';
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";
import styles from './Nav.module.scss'



const Nav = (props) => {

    return (
        <div className={styles.container}>
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
    );
}

export default Nav;
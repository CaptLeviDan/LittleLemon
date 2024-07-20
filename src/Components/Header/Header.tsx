import { useState, useRef, useEffect, MutableRefObject } from "react";
import styles from './Header.module.scss';
import MobileNav from "../MobileNav/MobileNav";
import Nav from "../Nav/Nav";
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";


const Header = (props) => {
    const headerRef = useRef(null);
    const [_, setLastScrollPosition] = useState(window.pageYOffset || document.documentElement.scrollTop);

    const handleScroll = () => {
        const header = headerRef.current;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        setLastScrollPosition((prevState) => {
            if (!header) return scrollPosition > 0 ? scrollPosition : 0;

            if (scrollPosition > prevState) {
                header.style.transform = "translateY(-200px)";
            } else {
                header.style.transform = "translateY(0)";
            };
            return scrollPosition > 0 ? scrollPosition : 0;
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const myFunction=()=>{
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }
    // const scrollTo=(id)=>{
    //     let doc = document.getElementById(id);

    //     if(doc !== null){
    //         doc.scrollTo()
    //     }
    // }

    return (

        <div className={styles.container} ref={headerRef}>
            <div className={styles.Content}>
                {/* <Nav />
                <MobileNav /> */}
                <div className={styles.topnav} id="myTopnav">
                    <ul>
                        <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
                        <li> <a href="/">Home</a> </li>
                        <li> <a href="/#about">About</a> </li>
                        <li> <a href="/#menu" 
                        // onClick={()=>scrollTo('#menu')}
                        >Menu</a> </li>
                        <li> <a href="/bookings">Reservations</a> </li>
                        <li className="orderBtn"> <a role="buthrefn" href="#">Order Online</a> </li>
                        <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
                        <a href="javascript:void(0);" className={styles.icon} onClick={myFunction}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Header;
import React from "react";
import styles from './Home.module.scss';
import Nav from "../Nav/Nav";
import Introduction from "../Introduction/Introduction";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
import Header from "../Header/Header";


const Home=()=>{
    return(
        <div  className={styles.container}>
            {/* <Nav />
            <MobileNav /> */}
            <Header />
            <Introduction />
            <Menu />
            <Footer />
        </div>
    );
}

export default Home;
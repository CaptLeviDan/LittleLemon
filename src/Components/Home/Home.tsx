import React from "react";
import styles from './Home.module.scss';
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Menu from "../Menu/Menu";


const Home=()=>{
    return(
        <div  className={styles.container}>
            <Header />
            <Introduction />
            <Menu />
        </div>
    );
}

export default Home;
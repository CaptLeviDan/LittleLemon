import React, { useEffect, useState } from 'react';
import styles from './Confirmation.module.scss';
import { useNavigate, NavigateFunction } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Confirmation from '../Confirmation/Confirmation';


const ConfirmationPage = () => {

    return (
        <div className={styles.container}>
            <Nav />
            <Confirmation />
            <Footer />
        </div>
    );
}

export default ConfirmationPage;
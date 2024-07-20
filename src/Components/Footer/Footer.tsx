import React from "react";
import styles from './Footer.module.scss';



const Footer = () => {

    return (

        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.copyRight}>
                    <p>© 2024 Little Lemon. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
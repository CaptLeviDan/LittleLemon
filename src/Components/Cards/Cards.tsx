import React from 'react';
import styles from './Cards.module.scss';
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";


const Cards = ({ imageUrl, title, price, description, ...props }) => {

    return (
        <div className={styles.container}>
            <img className={styles.Image} src={imageUrl} />
            <div className={styles.Header}>
                <span className="title card-title"><b>{title}</b></span>
                <span className="price highlight">$ {price}</span>
            </div>
            <div className={styles.Body}>
                {description}
            </div>

        </div>
    );
}

export default Cards;
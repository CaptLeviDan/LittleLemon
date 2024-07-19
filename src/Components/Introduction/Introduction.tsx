import React from 'react';
import styles from './Introduction.module.scss';
import { useNavigate, NavigateFunction } from "react-router-dom";
import restaurant_food from "../../assets/restaurantfood.jpg";


const Introduction = (porps) => {
    // const navigate: NavigateFunction = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="lead-txt">
                    We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className={styles.button}
                    // onClick={() => navigate("/bookings")} 
                    aria-label="Go to reservation table page.">Reserve a Table</button>

            </div>
            <div className={styles.Image} >
                <img src={restaurant_food} alt="Restaurant Food" />
            </div>
        </div>
    );
}

export default Introduction;
import React from 'react';
import styles from './Menu.module.scss';
import Cards from '../Cards/Cards';
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";


const Menu = (props) => {

    const Menuoptions = [
        {
            imageUrl: greekSalad,
            title: "Greek Salad",
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            imageUrl: bruchetta,
            title: "Bruchetta",
            price: 7.99,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            imageUrl: lemonDessert,
            title: "Lemon Dessert",
            price: 6.99,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>This weeks specials!</h1>
            </div>
            <div className={styles.cards}>
                {
                    Menuoptions.map(items => (
                        <Cards
                            imageUrl={items.imageUrl}
                            title={items.title}
                            price={items.price}
                            description={items.description}
                        />
                    ))
                }
            </div>

        </div>
    );
}

export default Menu;
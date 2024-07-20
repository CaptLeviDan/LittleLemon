import React from "react";
import { useReducer } from "react";
import styles from './Booking.module.scss';
import BookingForm from "../BookingForm/BookingForm";
import { updateTimes, initializeTimes } from "../../Helper/Helper";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";


const Booking = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (

        <div className={styles.container}>
              <Nav />
              <MobileNav />
              <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            <Footer />
   
        </div>
    );
}

export default Booking;
import React, { useEffect, useState } from 'react';
import styles from './Confirmation.module.scss';
import { useNavigate, NavigateFunction } from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MobileNav from '../MobileNav/MobileNav';


const Confirmation = () => {
    const navigate: NavigateFunction = useNavigate();
    const [booking, setBooking] = useState<{ date: string, time: string, guests: string, occasion: string }>();


    useEffect(() => {
        const booking = localStorage.getItem("Bookings");
        if (booking) {
            setBooking(JSON.parse(booking));
        };
    }, []);


    return (
        <div className={styles.container}>
             <Nav />
             <MobileNav />
           
            <div className={styles.Top}>
                <h1>Thank you for your reservation!</h1>
                <h3 className="lead-txt">We look forward to seeing you at Little Lemon.</h3>
            </div>
            {
                booking &&
                <div className={styles.Confirmation}>
                    <h2>Confirmation details</h2>
                    <span><strong>Occasion:</strong> {booking.occasion}</span>
                    <span><strong>Guests:</strong> {booking.guests}</span>
                    <span><strong>Date:</strong> {booking.date}</span>
                    <span><strong>Time:</strong> {booking.time}</span>
                </div>
            }

            <button className={styles.Submit} aria-label="Go back to the home page" onClick={() => navigate("/")}>Back to home</button>
            <Footer />
        </div>
    );
}

export default Confirmation;
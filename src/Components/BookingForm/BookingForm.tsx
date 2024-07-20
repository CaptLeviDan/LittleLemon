import React, { Dispatch, useEffect, FC } from "react";
import styles from './BookingForm.module.scss';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { submitAPI } from "../../Helper/Helper";

interface IBookingFormProps {
    dispatch: Dispatch<{ type: string, date: Date }>;
    availableTimes: {
        times: string[];
    };
};

const BookingForm = (props) => {
    const navigate: NavigateFunction = useNavigate();

    const formik = useFormik({
        initialValues: {
            date: (new Date()).toLocaleDateString("en-CA"),
            time: props.availableTimes.times[0],
            guests: 1,
            occasion: "birthday",
        },
        onSubmit: (values) => {
            const response: boolean = submitAPI(values);
            if (response) {
                localStorage.setItem("Bookings", JSON.stringify(values));
                navigate("/confirmation");
                // console.log(values);
            };
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Date is required"),
            time: Yup.string().oneOf(props.availableTimes.times).required("Time is required"),
            guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
            occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occasion is required"),
        }),
    });

    useEffect(() => {
        props.dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
    }, [formik.values.date]);

    return (

        <div className={styles.container}>
            <div className={styles.Top}>
                <h1>Book Now</h1>
            </div>
            <form className={styles.Form} onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" data-testid="res-date" id="res-date" {...formik.getFieldProps("date")} />
                <div className={styles.FormMessageError} data-testid="res-date-error">
                    {formik.touched.date && formik.errors.date}
                </div >
                <label htmlFor="res-time">Choose time</label>
                <select data-testid="res-time" id="res-time" {...formik.getFieldProps("time")}>
                    {props.availableTimes.times.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                {/* <div className={styles.FormMessageError} data-testid="res-time-error">
          {formik.touched.time && formik.errors.time}
        </div> */}
                <label htmlFor="guests">Number of guests</label>
                <input data-testid="guests" type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
                <div className={styles.FormMessageError} data-testid="guests-error">
                    {formik.touched.guests && formik.errors.guests}
                </div>
                <label htmlFor="occasion">Occasion</label>
                <select data-testid="occasion" id="occasion" {...formik.getFieldProps("occasion")}>
                    <option value="birthday" className="opt">Birthday</option>
                    <option value="engagement" className="opt">Engagement</option>
                    <option value="anniversary" className="opt">Anniversary</option>
                </select>
                <div className={styles.FormMessageError} data-testid="occasion-error">
                    {formik.touched.occasion && formik.errors.occasion}
                </div>
                <input className={styles.Submit} data-testid="submit-btn" type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;
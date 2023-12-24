import '../App.css';
import { useState } from "react";
import { useReducer } from "react";
import { fetchAPI } from "../BookingsAPI";
import {Link } from "react-router-dom";

function updateTimes(date) {
    return fetchAPI(date);
}


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
function Reservation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [people, setPeople] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");
    const getIsFormValid = () => {
        return (name && validateEmail(email) && email && date && phone && people);
    };


    function handleDateChange(e) {
        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        updateTimes(date);
        setFinalTime(availableTimes.map((times) => <option>{times}</option>));
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    const [finalTime, setFinalTime] = useState(
        availableTimes.map((times) => <option>{times}</option>)
    );

    return (
        <>
            <div id="reservationForm">
                <form>
                    <fieldset>
                        <h2>Reservations</h2>
                        <div className="Field">
                            <label htmlFor="name">Full Name<sup>*</sup></label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="Full Name" />
                        </div>
                        <div className="Field">
                            <label htmlFor="email">Email Address<sup>*</sup></label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email Address" />
                        </div>
                        <div className="Field">
                            <label htmlFor="phone">Phone Number<sup>*</sup></label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                placeholder="(xxx)-xxx-xxxx" />
                        </div>
                        <div className="Field">
                            <label htmlFor="people">Number of People<sup>*</sup></label>
                            <input
                                id="people"
                                type="number"
                                value={people}
                                min={1}
                                max={100}
                                onChange={(e) => {
                                    setPeople(e.target.value);
                                }}
                                placeholder="2,4,8..." />
                        </div>
                        <div className="Field">
                            <label htmlFor="date">Select Date<sup>*</sup></label>
                            <input
                                id="date"
                                type="date"
                                value={date}
                                onChange={handleDateChange}
                                placeholder="Select Date" />
                        </div>
                        <div className="Field">
                            <label htmlFor="time">Select Time<sup>*</sup></label>
                            <select required id="time">
                                {finalTime}
                            </select>
                        </div>
                        <div className="Field">
                            <label htmlFor="occasion">Occasion</label>
                            <select
                                id="occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option>None</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="Field">
                            <label htmlFor="preferences">Seating preferences</label>
                            <select
                                id="preferences"
                                value={preferences}
                                onChange={(e) => setPreferences(e.target.value)}
                            >
                                <option>None</option>
                                <option>Indoors</option>
                                <option>Outdoor (Patio)</option>
                                <option>Outdoor (Sidewalk)</option>
                            </select>
                        </div>

                        <div className="Field">
                            <label htmlFor="comments">Additional Comments</label>
                            <textarea
                                id="comments"
                                rows={8}
                                cols={50}
                                placeholder="Additional Comments"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="Field"> <p>Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</p></div>

                        <Link to="/confirmation"><button disabled={!getIsFormValid()}>Book Table</button></Link>
                    </fieldset>
                </form>
            </div>
        </>
    );
}
export default Reservation;
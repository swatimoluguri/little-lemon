import React from "react";
import '../App.css';
import Ratings from "../assets/ratings.png";

const Testimonials = () => {
    const reviewers = [
        {
            title: "Pranay",
            comment: "Greek salad was excellent",
            getImageSrc: () => require("../assets/pranay.jpg"),
        },
        {
            title: "Gaurav",
            comment: "Really enjoyed the atmosphere.",
            getImageSrc: () => require("../assets/gaurav.jpg"),
        },
        {
            title: "Vaishnavi",
            comment: "You have to try the Greek Salad!",
            getImageSrc: () => require("../assets/vaishnavi.jpg"),
        },
        {
            title: "Pallavi",
            comment: "Awesome place peaceful atmosphere with delicious food",
            getImageSrc: () => require("../assets/pallavi.jpg"),
        },
    ];
    return (
        <section id="testimonials">
            <h1>Testimonials</h1>
            <div id="reviewers"> {reviewers.map((reviewer) => (
                <div id="review">
                    <img id="reviewRating" src={Ratings} alt="Ratings" />
                    <img id="reviewImg" src={reviewer.getImageSrc()} alt={reviewer.title} />
                    <div>
                        <h4>{reviewer.title}</h4>
                        <p>"{reviewer.comment}"</p>
                    </div>
                </div>
            ))}</div>
        </section>
    );
};
export default Testimonials;
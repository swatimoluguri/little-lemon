import React from "react";
import '../App.css';

const Specials = () => {
    const projects = [
        {
            title: "Greek Salad",
            description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            getImageSrc: () => require("../assets/greek-salad.jpg"),
        },
        {
            title: "Bruschetta",
            description:
                "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
            getImageSrc: () => require("../assets/bruschetta.jpg"),
        },
        {
            title: "Red Sauce Pasta",
            description:
                "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            getImageSrc: () => require("../assets/pasta.jpg"),
        },
    ];
    return (
        <section id="specialDishes">
                <h4>Specials</h4>
            <div id="specials">{projects.map((project) => (
                <div id="card">
                    <img src={project.getImageSrc()} alt={project.title} />
                    <div id="container">
                        <h6>{project.title}</h6>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}</div>
        </section>
    );
};

export default Specials;
import HeroImg from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import '../App.css';
export default function Confirmation() {
    return (
        <>
            <div id="confirmation">
                <img
                    src={HeroImg}
                    alt="Little Lemon Ingredients"
                />
                <section>
                    <h1>Your Reservation is Confirmed!</h1>
                    <h4>A confirmation message has been sent to your email.</h4>
                    <h4>Thanks for dining with us!</h4>
                </section>

                <section id="confirmButton">
                    <Link to="/reservations">
                        <button>Book another Table</button>
                    </Link>
                    <Link to="/">
                        <button>Home Page</button>
                    </Link>
                </section>
            </div>
        </>

    );
}

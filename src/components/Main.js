import "./Main.css";
import HeroImg from "../assets/hero.jpg";
import Card from './Card';
import Review from './Review';

function Main() {
    return (
        <>
            <section class="hero">
                <div class="leftHero">
                    <span>Little Lemon</span>
                    <p>Chicago</p>
                    <p id='desc'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div class="rightHero">
                    <img src={HeroImg} alt="" />
                </div>
            </section>
            <section id="specialDishes">
                <h4>Specials</h4>
                <Card />
            </section>
            <section id="testimonials">
                <h1>Testimonials</h1>
                <Review />
            </section>
        </>
    );
}
export default Main;
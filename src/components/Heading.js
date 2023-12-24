import HeroImg from "../assets/hero.jpg";
import '../App.css';
function Heading() {
    return (
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
    );

}
export default Heading;
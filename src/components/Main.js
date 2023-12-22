import "./Main.css";
import HeroImg from "../assets/hero.jpg";

function Main(){
    return (
        <section class="hero">
            <div class="leftHero">
                <span>Little Lemon</span>
                <p>Chicago</p>
                <h3>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
            <button>Reserve a Table</button>
            </div>
            <div class="rightHero">
                <img src={HeroImg} alt=""/>
            </div>
        </section>
    );
}
export default Main;
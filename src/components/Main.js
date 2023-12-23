import "./Main.css";
import Kitchen from "../assets/kitchen.jpg";
import HeroImg from "../assets/hero.jpg";
import Restaurant from "../assets/restaurant.jpg";
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
            <section class="description">
                <div class="leftdescrition">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
                </div>
                <div class="rightdescrition">
                    <img id="kitchen" src={Kitchen} alt="" />
                    <img id="restaurant" src={Restaurant} alt="" />
                </div>
            </section>
        </>
    );
}
export default Main;
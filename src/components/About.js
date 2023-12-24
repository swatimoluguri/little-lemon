import Kitchen from "../assets/kitchen.jpg";
import Restaurant from "../assets/restaurant.jpg";
import '../App.css';
function About(){
    return(
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
    );
}
export default About;
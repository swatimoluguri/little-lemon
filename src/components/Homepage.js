import '../App.css';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Heading from './Heading';
import About from './About';

function Homepage() {
    return (
        <>
            <Heading />
            <main>
                <Specials />
                <Testimonials />
                <About />
            </main>
        </>
    );
}
export default Homepage;
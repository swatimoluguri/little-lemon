import SmallLogo from "../assets/logo-s.jpg";
import './Nav.css';

function Nav(){
    return (
        <nav>
            <div>
                <img src={SmallLogo}  alt="Little Lemon Restaurant Logo" />
            </div>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Book a Table</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>

        </nav>
    );
}
export default Nav;
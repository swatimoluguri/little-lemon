import '../App.css';
import SmallLogo from "../assets/logo-s.jpg";
import {Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <div id='leftFooter'>
                    <img src={SmallLogo} alt="Little Lemon Restaurant Logo" />
                </div>
                <div id='rightFooter'>
                    <div><ul>
                        <h2>Navigation</h2>
                        <li><a title="Home"><Link to="/">Home</Link></a></li>
                        <li><a title="Menu"><Link to="/">Menu</Link></a></li>
                        <li><a title="Book a Table"><Link to="/reservation">Book a Table</Link></a></li>
                        <li><a title="Order Online"><Link to="/">Order Online</Link></a></li>
                        <li><a title="About"><Link to="/">About</Link></a></li>
                        <li><a title="Login/Signin"><Link to="/">Login/Signin</Link></a></li>
                    </ul></div>
                    <div>
                        <ul>
                            <h2>Contact</h2>
                            <li><a title="Phone">Phone</a></li>
                            <li><a title="Email">Email</a></li>
                            <li><a title="Address">Address</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h2>Social Media</h2>
                            <li><a title="Instagram">Instagram</a></li>
                            <li><a title="Facebook">Facebook</a></li>
                            <li><a title="Twitter">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </footer></>
    );
}
export default Footer;
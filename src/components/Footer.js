import "./Footer.css";
import SmallLogo from "../assets/logo-s.jpg";

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
                        <li><a title="Home">Home</a></li>
                        <li><a title="Menu">Menu</a></li>
                        <li><a title="Book a Table">Book a Table</a></li>
                        <li><a title="Order Online">Order Online</a></li>
                        <li><a title="About">About</a></li>
                        <li><a title="Login/Signin">Login/Signin</a></li>
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
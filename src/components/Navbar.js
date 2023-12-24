import { Component } from "react";
import SmallLogo from "../assets/logo-s.jpg";
import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Reservation from "./Reservation";
import Confirmation from "./Confirmation";


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav >
                    <div>
                        <img src={SmallLogo} alt="Little Lemon Restaurant Logo" />
                    </div>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a title="Home"><Link to="/">Home</Link></a></li>
                            <li><a title="Menu"><Link to="/">Menu</Link></a></li>
                            <li><a title="Book a Table"><Link to="/reservations">Book a Table</Link></a></li>
                            <li><a title="Order Online"><Link to="/">Order Online</Link></a></li>
                            <li><a title="About"><Link to="/">About</Link></a></li>
                            <li><a title="Login/Signin"><Link to="/">Login/Signin</Link></a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/reservations" element={<Reservation />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </>
        );
    }
}
export default Navbar;
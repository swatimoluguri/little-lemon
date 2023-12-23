import { Component } from "react";
import SmallLogo from "../assets/logo-s.jpg";
import './Nav.css';

class Nav extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return (
            <nav >
                <div>
                    <img src={SmallLogo}  alt="Little Lemon Restaurant Logo" />
                </div>
                <div>
                    <ul id="navbar" className={this.state.clicked?"#navbar active":"#navbar"}>
                        <li><a  title="Home">Home</a></li>
                        <li><a  title="Menu">Menu</a></li>
                        <li><a  title="Book a Table">Book a Table</a></li>
                        <li><a  title="Order Online">Order Online</a></li>
                        <li><a  title="About">About</a></li>
                        <li><a  title="Login/Signin">Login/Signin</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked?'fas fa-times':'fas fa-bars'}></i>
                </div>
            </nav>
        );
    }
}
export default Nav;
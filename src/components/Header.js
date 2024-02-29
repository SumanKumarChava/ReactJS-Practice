import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const buttonClicked = () => {
        if(btnName === "Login"){
            setBtnName("Logout");
        }else{
            setBtnName("Login");
        }
    }


    return (
        <div className="header">
            <div id="logo-container">
                <img id="logo-img" src={LOGO_URL} alt="app-logo"/>
            </div>
            <div id="nav-items-container">
                <ul id="nav-items-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contactus">Contact us</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Cart</li>
                    <li><button onClick={buttonClicked}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
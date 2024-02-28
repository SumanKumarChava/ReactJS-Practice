import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';

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
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li><button onClick={buttonClicked}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
import {LOGO_URL} from '../utils/constants';

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
}

export default Header;
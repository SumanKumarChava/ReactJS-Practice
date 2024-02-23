import React from 'react';
import ReactDOM from 'react-dom'



/**
 *  Planning a sample app
 *   Namaste Foodies app
 *   1) Header
 *      - Nav items
 *      - logo
 *
 *   2) Body
 *      - Search
 *      - Restuarent container
 *          - Restaurent cards
 *   3) Footer
 *      - copyrights
 *      - links
 *      - address
 */

const Header = () => {
    return (
        <div className="header">
            <div id="logo-container">
                <img id="logo-img" src="https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/21/213/213794/2-o.jpg?1413906799" alt="app-logo"/>
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

const RestuarantCard = () => {
    return (
        <div className="res-item-card">
            <img className="food-item-image" src="https://th.bing.com/th/id/R.21a3ccb565f3a8cbf1c9cb3c89603334?rik=Yzg9qUmZWYoGTA&riu=http%3a%2f%2fwww.relishthebite.com%2fwp-content%2fuploads%2f2015%2f01%2fVegbiryani.jpg1_.jpg&ehk=4NnFeRD%2f7hM%2fXdVF4bv3Zpvhw09paZaDBGjlB4mYpdc%3d&risl=&pid=ImgRaw&r=0" alt="food-item-image"/>
            <h4>AK Biryanis</h4>
            <h5>Cusines, Takeaway, Evenings</h5>
            <h5>4.5 stars</h5>
            <h5>35 mins</h5>
        </div>
    );
}

const Body = () => {
    return (
        <div class="res-container">
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
        </div>
    )
}




const AppComponent = () => {
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}


// Must have these two lines
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);

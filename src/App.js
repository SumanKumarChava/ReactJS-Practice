import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { ROOT_ID } from './utils/constants';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Error from './components/Error';

const AppComponent = () => {
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>,
        errorElement: <Error/>
    },
    {
        path: "/contactus",
        element: <ContactUs/>
    },
    {
        path: "/about",
        element: <About/>
    },

]);

// Must have these two lines at the end
const root = ReactDOM.createRoot(document.getElementById(ROOT_ID));
root.render(<RouterProvider router={router}/>);

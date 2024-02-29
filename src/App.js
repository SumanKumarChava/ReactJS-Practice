import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { ROOT_ID } from './utils/constants';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Error from './components/Error';

const AppComponent = () => {
    return(
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/contactus",
                element: <ContactUs/>
            },
            {
                path: "/about",
                element: <About/>
            },   
            {
                path: "/",
                element: <Body/>
            },      
        ]
    },
]);

// Must have these two lines at the end
const root = ReactDOM.createRoot(document.getElementById(ROOT_ID));
root.render(<RouterProvider router={router}/>);

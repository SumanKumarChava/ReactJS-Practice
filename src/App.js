import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import { ROOT_ID } from './utils/constants';

const AppComponent = () => {
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

// Must have these two lines at the end
const root = ReactDOM.createRoot(document.getElementById(ROOT_ID));
root.render(<AppComponent/>);

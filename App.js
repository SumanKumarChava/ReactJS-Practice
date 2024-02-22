import React from 'react';
import ReactDOM from 'react-dom'

/*
<div id="parent">
    <div id="section1">
        <h1>this is h1</h1>
        <h2>this is h2</h2>
    </div>
    <div id="section2">
        <h1>this is h1</h1>
        <h2>this is h2</h2>
    </div>
</div>    

Creating the above structure using react js
*/


var heading = <h1>Hello World</h1>;
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

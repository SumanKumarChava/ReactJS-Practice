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


const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"section1"}, [React.createElement("h1",{},"this is h1"),React.createElement("h2",{},"this is h2")]),
    React.createElement("div",{id:"section2"}, [React.createElement("h1",{},"this is h1"),React.createElement("h2",{},"this is h2")])
]);


const root = ReactDOM.createRoot(document.getElementById("div2"));
console.log(root);
root.render(parent);
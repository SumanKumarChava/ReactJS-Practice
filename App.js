import React from 'react';
import ReactDOM from 'react-dom'

// React element
var heading = <h1>Hello World</h1>;

// React component
const Title = () => {
    return <h1>Hello World title</h1>
}
const Headingcomponent = () => {
    return (<div>
                <Title/>
                <h2>Hello React JS component</h2>
            </div>);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<Headingcomponent/>);

const heading = React.createElement("h1",{id:"header", name:"suman"},"Hello from React JS");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("div2"));
console.log(root);
root.render(heading);
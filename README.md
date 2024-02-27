# ReactJS-Practice Notes

## Introduction and Basic setup

1. Normal Javascript example
2. Simple React JS example
3. Complex React js example
4. Run **"npm init"** to add npm configuration file i.e., package.json
5. Now install a bundling library as a dependency. Ex : Webpack, parcel etc., Here, we are adding parcel as the bundler.
   **"npm install -D parcel"**
6. Two types of dependencies -> a) Dev dependency b) Normal Dependency.
   Here, parcel is a dev dependency.
7. Read more about parcelling libraries like Webpack, Parcel etc.,
8. Read more about difference between caret(^) and tilde(~) in package.json
9. Read Differences between packages.json vs packages-lock.json
10. What is transitive dependency ? - dependencies have some dependencies and those will again have some more dependencies.
11. Added gitignore file to ignore "node_modules" folder to be checked in to git.
    Reason : packages.json and packages-lock.json will make sure to install all those node modules as and when required.
12. Even if you delete "node_modules" folder, **"npm install"** command will regenerate it again.
13. If we want to install a package - **use npm**.
    If we want to execute the package - **use npx**
14. Now run command **npx parcel index.html** to start our project in "localhost:1234" server.
15. We can remove react cdn links and install react,react-dom locally.
    Run commands **npm install react**, **npm install react-dom**
16. Now add **import React** and **import React-Dom** statements in js file, to use the react package by importing.
17. Also add, **type="module"** for <script src="./App.js">
18. Parcel is doing **HMR = Hot Module replacement** which is like hot reload. Also gives faster builds by internal caching.
19. Parcel also does image optimisation for prod builds.
20. It minifies, compresses, removes unncessary code, tree shaking, consistent hashing, code splitting, diagnostics, HTTPS support, differential bundling (ability of app to run in all kinds of browsers) as well.
21. Visit **www.parceljs.org** to read more.
22. React is fast mainly because of this Parcel library.
23. "dist" folder is like bin and obj that we get in .net apps i.e., it contains app's build.
24. Run **npx parcel build index.html** command to generate production builds.
25. **At any moment, you can delete node_modules, dist, .parcel-cache folder and run "npm install" again to get them again.
    So no need to send them to git.**
26. We can configure all the browser versions in which our app is supposed to work using "browserslist" configuration in package.json.
    Read **"www.browserslist.dev"** for more info.

## Core React

1. To start React, add "parcel index.html" in the package.json -> scripts object and use **npm start** command
2. JSX is not actually writing html in js file but it is a JS file which can have HTML like syntax in it.
3. Babel - library that takes the jsx and transpiles into browser understandable JS - it is a js compiler.
4. JSX => React.CreateElement => JS React Element => Html Element.
   This is the way in which JSX elements are converted to html elements.
5. visit https://babeljs.io/ for more info.
6. Prettier, Bracket pair coloriser, Es lint, better comments - some of the important vs code extensions.
7. 2 types of react components - class based and functional based
8. React functional compoenent - it is nothing but a function that returns a react element
9. Component Composition - using one React component within another component
10. Cross site scripting attack - where an attacker can run some javscript within an user's browser through some malicious api and get his personal data. Read more about this. JSX avoids this attack by default when we keep some js code with in curly braces. "{}"
11. React JS code is readable mainly because of "JSX".
12. **Always Design and plan the ux before starting to code.**
13. If we want to send dynamic data to a component, we can pass it through **props**.
    **React component consider props as an object that is passed as an argument to it.**
14. **Conflict Driven UI** - case When a website is driven by conflicts. In this case, api are implemented in such a way that the UI will be changed based on the data. Example : Like showing or hiding the carousel, based on data comes or not from api etc.,

    Example of a conflict : Mumabi may have offers to show in UI, but Hyderabad may not have any. In this case conflict comes and we cant design one ui for each city.

15. Whenever we are using map() method, we have to define unique key for the inner react elements. (to avoid warnings in the web console.) If we dont do that, react will rerender all the items in the UI whenever a new item is added to the list. **So, it takes a big performance hit, if we dont give key.**

16. **React dont recommend using index as keys, since it is an anti-pattern**. So, best practice is using any unique id that we get from api.
17. **React component should not contain any hardcoded data (industry standard).** It can be url, list, data anything that is hardcoded. Good practice is to keept it in utils -> constants.js (or) utils -> mockdata.js.

18. **Components names start with Capital letters.**
19. **Its a good habit to name all constants in capital letters.**

** Named Exports vs Default Exports ** - these are the 2 ways in which we can export a component

20. We can use named exports to export multiple things from single file.
    ex : export const NAME = "Suman";
    export const CITY = "City1";

21. We can use default exports to export single thing from single file .
    example : from a component file we export single component.
    ex : export default Header;

22. **Named exports can be imported through curly braces . Ex : import {NAME} from './contants.js'**
    Dafult exports can be imported normally. Ex : import Header from './Header.js'
23. React Hook is a normal JS function provided by react library.
24. useState(), useEffect() are the mainly used react hooks most of the times.

25. let names = []; // way to create a normal variable.

    const [names, setName] = useState([]); // way to create a local state variable & setName() will update the names list

26. whenever the state variable gets updated, react will re-render the component. React makes DOM operations superfast.
27. React uses Reconciliation algorithm or React Fiber algorithm to perform dom operations quickly by using virtual dom. Read more at **https://github.com/acdlite/react-fiber-architecture**. **This is the core mechanism of how react works**

28. Microservices architecture follows Single responsibility principle and has seperation of concerns.
29. There are 2 ways we can load data onto screen.

    a) Page loads -> Make api call and get data -> Then render it on UI.
    b) Page loads -> Render whatever static content you have -> Make api call and get data -> rerender ui if data comes from api.
    In react, we always use the second approach for better ux. (React's render cycles are very fast, so its ok to render twice.)

    We can use **"useEffect()"** for this. Usereffect gets called after the component rendering completes.

30. As part of demo, we are using swiggy api and we got CORS error in the process. **we can install "Allow CORS" extension** to bypass it.

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
13. If we want to install a package - **use npm**
    If we want to execute the package - **use npx**
14. Now run command **npx parcel index.html** to start our project in "localhost:1234" server.
15. We can remove react cdn links and install react,react-dom locally.
    Run commands **npm install react**, **npm install react-dom**
16. Now add **import React** and **import React-Dom** statements in js file, to use the react package by importing.
17. Also add, **type="module"** for <script src="./App.js">

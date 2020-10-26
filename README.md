# complex-reatct-app
1. Create project 
- mkdir complex-react-app

2. Create file package.json
- cd complex-react-app
- npm init -y

3. Intsall library React
- npm install --save react react-dom

4. Install webpack
*** Command ***
- npm install --save-dev webpack webpack-cli@3 webpack-dev-server
*** Note ***
+ webpack: bundle Javascript file for usage in a browser.
+ webpack-cli: 
+ webpack-dev-server: 

*** Document config webpack ***
https://webpack.js.org/concepts/


5. Install babel: 
- npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
- @babel/preset-env : complie mJavscript Es6+ to Javscript ES5
- @babel/preset-react : compile jsx to javsscript
- babel-loader : compile Javscript
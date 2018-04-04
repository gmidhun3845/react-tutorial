# React+D3 Tutorial

This project is a beginner level tutorial to setting up a react app. We will also look into developing a simple bar chart with D3.

## Requirements

For development, you will need Node.js installed on your environement. Then we will use npm to get React and D3.

### Node

[Node](http://nodejs.org/) is really easy to install & now includes [NPM](https://npmjs.org/).

#### Node installation on OS X

    brew install node

#### Node installation on Linux

    curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash 
    sudo apt-get install nodejs
    sudo apt-get install build-essential

You should be able to run the following command after the installation.

    $ node -v
    v9.10.1

    $ npm -v
    5.8.0

### React

Now that you have node installed in your system. Lets start a node project.

    mkdir reactProject
	cd reactProject
	npm init

Terminal prompt requests for information about your project. You can just skip through by pressing enter, if you wish to add information about your project you can do so. This will generate a package.json file.

![node setup image](node_setup.png)

#### Setting up react and babel

Now run the follwing commands to add react and babel as dependencies to the project. We will also install webpack to bundle our code into a single js file and webpack-dev-server to run a development server.

	npm install --save react react-dom
	npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
	npm install --save-dev webpack webpack-cli webpack-dev-server

Now that we installed babel we need to configure the react app to use babel. Add the following config in the package.json file

	"babel": {
	    "presets": [
	      "env",
	      "react"
	    ]
	  },

Now we need to configure webpack to make you of babel-loader and output a bundle.js file. Create a file webpack.dev.config.js and define a entry point, loaders that are responsible to turing the code into single js file, output path for the bundle and options for the dev server.

	var webpack = require('webpack');
	var path = require('path');

	var parentDir = path.join(__dirname, '/');

	module.exports = {
	    entry: [
	        path.join(parentDir, 'index.js')
	    ],
	    module: {
	        rules: [{
	                test: /\.(js|jsx)$/,
	                exclude: /node_modules/,
	                use: {
	                    loader: 'babel-loader'
	                }
	            }
	        ]
	    },
	    output: {
	        path: parentDir + '/dist',
	        filename: 'bundle.js'
	    },
	    devServer: {
	        contentBase: parentDir,
	        historyApiFallback: true
	    }
	}


Now lets create our index.html and index.js which is the entry point for our webpack server. Create two files index.html and index.js in the root folder.

	<!DOCTYPE html>
	<html>
	    <head>
	        <title> React Tutorial </title>
	    </head>
	    <body>

	        <div id="app"></div>
	        <script type="text/javascript" src="/bundle.js"></script>
	        <script src="https://d3js.org/d3.v5.min.js" charset="utf-8"></script>
	    </body>
	</html>

You can see in the index.html code our code will be mounted inside ```html <div id="app"></div> ```. And you can see in the index.js file below, our App will be mounted inside element with id "app".

	import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './containers/App';

	ReactDOM.render(<App />, document.getElementById('app'))

For the final step of the setup, we will create a componen that will be mounted on the homepage of the server.

	mkdir containers
	cd container
	touch App.js

Add the following code to the App.js file create. The App component simply return header that has some text.

	import React, {Component} from 'react';

	class App extends Component {
	    render () {
	        return (
	        		<h1 style={{color:"green"}}>React & D3 tutorial</h1>
	        );
	    }
	}

	export default App;

Add the following script to package.json to let webpack know where the config file is and to run.

	"scripts": {
	  "test": "echo \"Error: no test specified\" && exit 1",
	  "dev": "./node_modules/.bin/webpack-dev-server --mode development --config ./webpack.dev.config.js"
	}

Finally run the command below to start the server and you will be able to see the app working on http://localhost:8080 

	npm run dev

## Creating a Bar-Chart

### creating a bar

create a folder components, then we will create our first component i.e., a rectangle for the bar chart.

	mkdir components
	cd components
	touch Rectangle.js

Write the following code to the file. Which receives props from a parent component and creates a rectangle from those specifications.

	import React, { Component } from 'react'

	class Rectangle extends Component {
		render() {
			return ( <rect width={this.props.width} height={this.props.height} x={this.props.x} y={this.props.y} /> );
		}
	}

	export default Rectangle;

Also modify the App.js as below to send props to the child components and render the child component.

	import React, {Component} from 'react';
	import Rectangle from '../components/Rectangle'

	class App extends Component {
	    render () {
	        return (
	        	<div>
	        		<h1 style={{color:"green"}}>React & D3 tutorial</h1>
	        		<svg height="500" width="500">
	        			<Rectangle height="30" width="150" x="30" y="30" fill="orange"></Rectangle>
	        		</svg>
	        	</div>
	        );
	    }
	}

	export default App;

You can see by running the app a rectangle in the browser.
![Rectangle example](react_rectangle.png)
---

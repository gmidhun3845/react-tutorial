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
	touch webpack.dev.config.js

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
	            },{
	                test: /\.less$/,
	                use: ["style-loader", "css-loader"]
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

	
---

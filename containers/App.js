import React, {Component} from 'react';
import Rectangle from '../components/rectangle'

export default class App extends Component {
    render () {
        return (
        	<div>
        		<h1>This is my new react app</h1>
        		<svg><Rectangle width="30" height="100" x="30" y="30"></Rectangle></svg>
        	</div>
        );
    }
}
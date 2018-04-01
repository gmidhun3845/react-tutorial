import React, {Component} from 'react';
import Rectangle from '../components/rectangle'

const Rectangle = () => (
    <rect width="100" height="200" x="50" y="20" />
);

export default class App extends Component {
    render () {
        return (
        	<div>
        		<h1 style={{color:"green"}}>React + D3</h1>
        		<svg><Rectangle width="30" height="100" x="30" y="30"></Rectangle></svg>
        	</div>
        );
    }
}
import React, {Component} from 'react';
import BarChart from '../components/BarChart'

export default class App extends Component {
    render () {
        return (
        	<div>
        		<h1 style={{color:"green"}}>React & D3 Tutorial</h1>
        		<BarChart></BarChart>
        	</div>
        );
    }
}
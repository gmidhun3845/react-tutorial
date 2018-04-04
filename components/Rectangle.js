import React, { Component } from 'react'
import * as d3 from 'd3';

class Rectangle extends Component {

	render() {
		return ( <rect width={this.props.width} height={this.props.height} x={this.props.x} y={this.props.y} fill="orange" /> );
	}
}
export default Rectangle

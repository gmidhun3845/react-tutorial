import React, { Component } from 'react'
import Rectangle from "./Rectangle"
import * as d3 from 'd3'

class BarChart extends Component {

	constructor(props){
		super(props)
		this.state = {
			data: [300,100,150,225,75,275],
			width: 500,
			height: 400
		};
		this.addElement = this.addElement.bind(this);
		this.removeElement = this.removeElement.bind(this);
	}

	addElement(event){
		this.setState({ 
		  data: this.state.data.concat([Math.floor(Math.random()*300)])
		});
	}

	removeElement(event){
		this.setState({ 
		  data: this.state.data.slice(0,-1)
		});
	}

	render() {

		var props = this.state;

	    var y_scale = d3.scaleLinear().domain([0, d3.max(this.state.data)]).range([0, this.state.height]);

	    var x_scale = d3.scaleBand().domain(d3.range(this.state.data.length)).rangeRound([0, this.state.width]).padding(0.1);

	    var bars = this.state.data.map(function(point, i) {
	      var height = y_scale(point),
	          y = props.height - height,
	          width = x_scale.bandwidth(),
	          x = x_scale(i);
	      return (
	        <Rectangle height={height} 
	              width={width} 
	              x={x} 
	              y={y} 
	              key={i} />
	      )
	    });

		return ( 
				<div>
					<svg width={this.state.width} height={this.state.height}>
						{bars} 
					</svg>
					<p id="Add" onClick={this.addElement}>Add</p>
					<p id="Remove" onClick={this.removeElement}>Remove</p>
				</div>
			);
	}
}
export default BarChart;

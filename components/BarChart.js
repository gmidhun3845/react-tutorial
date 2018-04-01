import React, { Component } from 'react'
import Rectangle from "./Rectangle"
import * as d3 from 'd3'
import ReactTransitionGroup from 'react-addons-transition-group'

class BarChart extends Component {

	constructor(props){
		super(props)
		this.state = {
			data: [300,100,150,225,75,275],
			width: 500,
			height: 400
		}
		this.addElement = this.addElement.bind(this);
		this.removeElement = this.removeElement.bind(this);
	}

	addElement(event){

		this.setState({ 
		  data: this.state.data.concat([Math.floor(100+Math.random()*300)])
		});
	}

	removeElement(event){
		this.setState({ 
		  data: this.state.data.slice(0,-1)
		});
	}

	render() {
		var props = this.state;
		console.log(props);
		var transition = d3.transition()
                   .duration(2000);

	    var yScale = d3.scaleLinear()
	      .domain([0, d3.max(this.state.data)])
	      .range([0, this.state.height]);

	    var xScale = d3.scaleBand().domain(d3.range(this.state.data.length))
				    .rangeRound([0, this.state.width])
				    .padding(0.05);

	    var bars = this.state.data.map(function(point, i) {
	      var height = yScale(point),
	          y = props.height - height,
	          width = xScale.bandwidth(),
	          x = xScale(i);
	      return (
	        <Rectangle height={height} 
	              width={width} 
	              x={x} 
	              y={y} 
	              key={i} 
	              transition={transition}/>
	      )
	    });

		return ( 
				<div>
					<svg width={this.state.width} height={this.state.height}>
						<ReactTransitionGroup component="svg"> 
						{bars} 
						</ReactTransitionGroup>
					</svg>
					<p id="add" onClick={this.addElement}>Add</p>
					<p id="'remove" onClick={this.removeElement}>Remove</p>
				</div>
			);
	}
}
export default BarChart

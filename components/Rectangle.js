import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class Rectangle extends Component {

	constructor(props){
		super(props)
		this.state = {
			height: this.props.height,
			width: this.props.width,
			x: this.props.x,
			y: this.props.y, 
			transition: this.props.transition
		}
	}

	// componentWillEnter(callback){
	// 	console.log("adindiuqwn");
	// 	var node = d3.select(ReactDOM.findDOMNode(this));
	// 	var temp = this.state.height;
	// 	console.log(temp);
 
 //        this.setState({y: 0});

 //        console.log(this.state)
 
 //        node.transition(this.state.transition)
 //        	.attr("height",0)
 //            .on('end', () => {
 //                this.setState({height: temp});
 //                callback()
 //            });
	// }

	// componentWillLeave(callback) {
	// 	console.log("adfonweondoiwe");
 //        let node = d3.select(ReactDOM.findDOMNode(this));
 
 //        this.setState({y: 0});
 
 //        node.transition(this.state.transition)
 //            .on('end', () => {
 //                this.setState({y: this.state.y});
 //                callback()
 //            });
 //    }

	// ComponentWillMount(props){
	// 	console.log("ofinwoeindeo")
	// 	this.setState({height: this.props.height,width: this.props.width, x: this.props.x, y: this.props.y})
	// }
	// ComponentDidMount(props){
	// 	console.log("dmmweded ew")
	// 	this.setState({height: this.props.height,width: this.props.width, x: this.props.x, y: this.props.y})
	// }
	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.height!=this.state.height || nextProps.width!=this.state.width || nextProps.x!=this.state.x || nextProps.y!=this.state.y){
	// 		this.setState({height: this.props.height,width: this.props.width, x: this.props.x, y: this.props.y})
	// 		return true;
	// 	}
	// 	return false;
	// 	let node = d3.select(ReactDOM.findDOMNode(this));

 //        this.setState({ color: ExitColor });

 //        node
 //            .interrupt()
 //            .transition(this.transition)
 //            .attr("y", 60)
 //            .style("fill-opacity", 1e-6)
 //            .on("end", () => {
 //                this.setState({ y: 60, fillOpacity: 1e-6 });
 //            //     callback();
 //            // });
	// }

	shouldComponentUpdate(nextProps){

		if(nextProps.height!=this.state.height || nextProps.width!=this.state.width || nextProps.x!=this.state.x || nextProps.y!=this.state.y){
			this.setState({height: this.props.height,width: this.props.width, x: this.props.x, y: this.props.y})
			return true;
		}
		return false;
	}

	render() {
		return ( <rect width={this.state.width} height={this.state.height} x={this.state.x} y={this.state.y} /> );
	}
}
export default Rectangle

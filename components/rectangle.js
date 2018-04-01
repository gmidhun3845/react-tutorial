import React, { Component } from 'react'

class Rectangle extends Component {

	constructor(props){
		super(props)
		this.state = {
			height: this.props.height,
			width: this.props.width,
			x: this.props.x,
			y: this.props.y
		}
	}

	// ComponentWillMount(props){
	// 	console.log("ofinwoeindeo")
	// 	this.setState({height: this.props.height,width: this.props.width, x: this.props.x, y: this.props.y})
	// }
	// ComponentDidMount(props){
	// 	console.log("dmmweded ew")
	// 	this.setState({height: this.props.height,width: this.props.width, x: this.props.x, y: this.props.y})
	// }
	// ComponentWillReceiveProps(props){
	// 	console.log("ofinwowededkqweqweindeo")
	// 	this.setState({height: this.props.height,width: this.props.width, x: this.props.x, y: this.props.y})
	// }

	render() {
		return ( <rect width={this.state.width} height={this.state.height} x={this.state.x} y={this.state.y} /> );
	}
}
export default Rectangle

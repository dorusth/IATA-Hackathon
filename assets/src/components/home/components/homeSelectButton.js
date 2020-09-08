import React, {Component} from 'react';

class HomeSelectButton extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="home-selectButton">
				<p>{this.props.buttonText}</p>
			</div>
		)
	}
}

export default HomeSelectButton;

import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Header extends Component {

	constructor(props){
		super(props)
	}

	render(){
		return(
			<header>
				<a href="../"><img src="assets/img/IATA.svg"/></a>
				<h2>IATA Training</h2>
				<nav>
					<div>
						<img src="./assets/img/flags/united-kingdom.svg" height="75%" />
						<p>EN</p>
					</div>
					<a href="../browse"><div>
						<i className="fas fa-user-circle fa-2x"></i>
						<p>{this.props.user.name}</p>
					</div></a>
				</nav>
			</header>
		);
	}
}

export default Header;

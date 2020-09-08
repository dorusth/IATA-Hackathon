import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import HomeSelectButton from './components/HomeSelectButton';

class HomeWelcome extends Component{
	render(){
		return(
			<section id="welcome" className="main">
				<h1>Welcome Back,</h1>
				<h2>{this.props.user.name}</h2>
				<div>
					<Link to={`/browse`}>
						<HomeSelectButton buttonText={"Browse lessons"}/>
					</Link>
					<Link to={`/lesson`}>
						<HomeSelectButton buttonText={"Progress: lesson 1.1.1"}/>
					</Link>
				</div>
			</section>
		)
	}
}

export default HomeWelcome;

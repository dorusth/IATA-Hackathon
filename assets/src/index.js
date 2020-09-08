import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Header from './components/header/index';
//Home
import HomeWelcome from './components/home/index';
//browse module
import BrowseModule from './components/browseModule/index'
//Lesson Chapter
import LessonInterface from './components/lessonInterface/index'

class App extends Component {

constructor(){
	super()
	this.state = {
		content: data,
	}
}

render(){
	return(
		<div className="wrapper">
		<Header user={this.state.content.user} />
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<HomeWelcome user={this.state.content.user} />
				</Route>
				<Route path="/browse">
					<BrowseModule moduleData={this.state.content.lessonSelect} />
				</Route>
				<Route path="/lesson">
					<LessonInterface courseData={this.state.content.modules[0].lessons.lesson1.chapters[0]} videoLink="https://player.vimeo.com/video/260915255" />
				</Route>
				<Route path="/lesson2">
					<LessonInterface courseData={this.state.content.modules[0].lessons.lesson1.chapters[1]} videoLink="https://player.vimeo.com/video/260915255" />
				</Route>
				<Route path="/lesson3">
					<LessonInterface courseData={this.state.content.modules[0].lessons.lesson1.chapters[2]} videoLink="https://player.vimeo.com/video/260915255" />
				</Route>
				<Route path="*">
					<p>Test</p>
				</Route>
			</Switch>
		</BrowserRouter>
		</div>
	);
}

}

ReactDOM.render(<App />, document.querySelector('.container'));

import React,{Component} from 'react';

import ModuleLessonList from './components/moduleLessonList';

class BrowseModule extends Component{
	constructor(props){
		super(props)

		this.state={
			items:data.lessonSelect,
		}
	}

	render(){
		return(
			<section className="browseModule main">
					<h1>Module 1</h1>
					<h3>Overview of the Air Transportation Industry</h3>
					<div className="lessonList">
						<ModuleLessonList listData={this.state.items[0]} count="0" />
						<ModuleLessonList listData={this.state.items[1]} count="1" />
						<ModuleLessonList listData={this.state.items[2]} count="2" />

					</div>
			</section>
		);
	}
}

export default BrowseModule;

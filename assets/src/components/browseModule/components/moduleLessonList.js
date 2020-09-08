import React,{Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class ModuleLessonList extends Component{
	constructor(props){
		super(props)

		this.state = {
			listData: this.props.listData,
			i:this.props.count,
		}
	}
	render(){
		{console.log(this.state.listData)}
		return(
			<details>
				<summary>{this.state.listData.lesson + this.state.listData.title}</summary>
				<ul>
					<a href="../lesson"><li>{data.lessonSelect[this.state.i].chapters[0].chapter + data.lessonSelect[this.state.i].chapters[0].title}</li></a>
					<a href="../lesson2"><li>{data.lessonSelect[this.state.i].chapters[1].chapter + data.lessonSelect[this.state.i].chapters[1].title}</li></a>
					<a href="../lesson3"><li>{data.lessonSelect[this.state.i].chapters[2].chapter + data.lessonSelect[this.state.i].chapters[2].title}</li></a>
					<a href="../lesson1"><li>Quiz</li></a>
				</ul>
			</details>
		);
	}
}

export default ModuleLessonList;

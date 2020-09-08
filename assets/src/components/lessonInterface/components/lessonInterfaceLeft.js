import React,{Component} from 'react';

class LessonInterfaceLeft extends Component{
	constructor(props){
		super(props)

		this.state = {i:0}
	}

	IncrementItem = () => {
		if(this.state.i < this.props.courseContent.content.length-1){
			this.setState({ i: this.state.i + 1 });
		}
	}
	DecrementItem = () => {
		if(this.state.i >0){
			this.setState({ i: this.state.i - 1 });
		}
	}

	render(){
		return(
			<div className="lessonInterfaceLeft">
				<h1><span className="underline">{this.props.courseContent.chapterNr}</span>{this.props.courseContent.title}</h1>
				<div className="ChapterText">
				<p>{this.props.courseContent.content[this.state.i]}</p>
				</div>
					<div className="lessonControls">
						<button onClick={this.DecrementItem} className="lessonPrevious hidden">Previous</button>
						<button onClick={this.IncrementItem} className="lessonNext">Next</button>
					</div>
			</div>
		);
	}
}

export default LessonInterfaceLeft;

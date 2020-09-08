import React,{Component} from 'react';

class LessonInterfaceRight extends Component{
	constructor(props){
		super(props)
	}
	render(){
		{console.log(this.props)}
		return(
			<div className="lessonInterfaceRight">
				<iframe src={this.props.video} width="100%" height="100%"></iframe>
			</div>
		);
	}
}

export default LessonInterfaceRight;

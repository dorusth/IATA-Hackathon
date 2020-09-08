import React,{Component} from 'react';

class SlideInNav extends Component{
	render(){
		return(
			<div className="lessonInterface-slideInNav">
				<ul>
					<li>Lesson 1</li>
					<li>Lesson 2
						<ul>
							<li>Chapter 1</li>
							<li>Chapter 2</li>
							<li>Chapter 3</li>
							<li>Quiz</li>
							</ul>
					</li>
					<li>Lesson 3</li>
					<li>Lesson 4</li>
				</ul>
			</div>
		);
	}
}

export default SlideInNav;

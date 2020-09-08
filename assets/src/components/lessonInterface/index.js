import React, {Component} from 'react';

import SlideInNav from './components/slideInNav';
import LessonInterfaceLeft from './components/lessonInterfaceLeft';
import LessonInterfaceRight from './components/lessonInterfaceRight';

class LessonInterface extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<section className="lessonInterface main">
				{/* <SlideInNav /> */}
				<LessonInterfaceLeft courseContent={this.props.courseData} />
				<LessonInterfaceRight video={this.props.videoLink} />
			</section>
		);
	}
}

export default LessonInterface;

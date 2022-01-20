import React from 'react'

import AnimatedContent from './Common/AnimatedContent'
import InitialNavigator from './Body/Navigators/Initial'
import IntermNavigator from './Body/Navigators/Interm'
import ClosingNavigator from './Body/Navigators/Closing'
import FaqOption from './Body/Options/Faq'
import RatingOption from './Body/Options/Rating'
import FeedbackOption from './Body/Options/Feedback'

import 'styles/chat/body.scss'

const ChatBody: React.FC<any> = (props) => {
	return (
		<div className="chat-body">
			<div className="body-cont">
				<AnimatedContent
					visible={props.state.initial}
					component={<InitialNavigator {...props} />} />
				<AnimatedContent
					visible={props.state.interm}
					component={<IntermNavigator {...props} />} />
				<AnimatedContent
					visible={props.state.closing}
					component={<ClosingNavigator {...props} />} />
				<AnimatedContent
					visible={props.state.faqOption}
					component={<FaqOption {...props} />} />
				<AnimatedContent
					visible={props.state.ratingOption}
					component={<RatingOption {...props} />} />
				<AnimatedContent
					visible={props.state.feedbackOption}
					component={<FeedbackOption {...props} />} />
			</div>
		</div>
	)
}

export default ChatBody
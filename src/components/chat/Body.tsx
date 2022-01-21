import React from 'react'

import AnimatedComponent from './Common/AnimatedComponent'
import Greeting from './Body/Greeting'
import InitialNavigator from './Body/Navigators/Initial'
import IntermNavigator from './Body/Navigators/Interm'
import ClosingNavigator from './Body/Navigators/Closing'
import FaqOption from './Body/Options/Faq'
import RatingOption from './Body/Options/Rating'
import FeedbackOption from './Body/Options/Feedback'

import 'styles/chat/body.scss'

const ChatBody: React.FC<any> = (props) => {
	const { state } = props

	return (
		<div className="chat-body">
			<div className="body-cont">
				<AnimatedComponent
					visible={state.component.greeting}
					variants={greetingAnimationVariants}
					component={<Greeting {...props} />} />
				<AnimatedComponent
					visible={state.component.initial}
					component={<InitialNavigator {...props} />} />
				<AnimatedComponent
					visible={state.component.interm}
					component={<IntermNavigator {...props} />} />
				<AnimatedComponent
					visible={state.component.closing}
					component={<ClosingNavigator {...props} />} />
				<AnimatedComponent
					visible={state.component.faqOption}
					component={<FaqOption {...props} />} />
				<AnimatedComponent
					visible={state.component.ratingOption}
					component={<RatingOption {...props} />} />
				<AnimatedComponent
					visible={state.component.feedbackOption}
					component={<FeedbackOption {...props} />} />
			</div>
		</div>
	)
}

export default ChatBody

const greetingAnimationVariants = {
	hidden: { opacity: 0, x: 0, y: 400 },
	visible: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -400 }
}
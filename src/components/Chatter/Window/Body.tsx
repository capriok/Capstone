import React from 'react'

import Motion from './Common/Motion'
import Greeting from './Body/Navigators/Greeting'
import InitialNavigator from './Body/Navigators/Initial'
import IntermNavigator from './Body/Navigators/Interm'
import ClosingNavigator from './Body/Navigators/Closing'
import FaqOption from './Body/Options/Faq'
import RatingOption from './Body/Options/Rating'
import FeedbackOption from './Body/Options/Feedback'

import 'styles/chatter/window/body.scss'

const Body: React.FC<any> = (props) => {
	const { state } = props

	const componentVariants = {
		hidden: { opacity: 0, y: 0, x: 300 },
		visible: { opacity: 1, y: 0, x: 0 },
		exit: { opacity: 0, y: 0, x: -300 }
	}

	const greetingVariants = {
		hidden: { opacity: 0, x: 0, y: 400 },
		visible: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -400 }
	}

	return (
		<div className="chat-body">
			<div className="body-wrap">
				<Motion
					visible={state.component.greeting}
					variants={greetingVariants}
					component={<Greeting {...props} />} />
				<Motion
					visible={state.component.initial}
					variants={componentVariants}
					component={<InitialNavigator {...props} />} />
				<Motion
					visible={state.component.interm}
					variants={componentVariants}
					component={<IntermNavigator {...props} />} />
				<Motion
					visible={state.component.closing}
					variants={componentVariants}
					component={<ClosingNavigator {...props} />} />
				<Motion
					visible={state.component.faqOption}
					variants={componentVariants}
					component={<FaqOption {...props} />} />
				<Motion
					visible={state.component.ratingOption}
					variants={componentVariants}
					component={<RatingOption {...props} />} />
				<Motion
					visible={state.component.feedbackOption}
					variants={componentVariants}
					component={<FeedbackOption {...props} />} />
			</div>
		</div>
	)
}

export default Body

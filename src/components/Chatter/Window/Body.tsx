import React from 'react'

import Motion from './Common/Motion'
import Greeting from './Body/Navigators/Greeting'
import InitialNavigator from './Body/Navigators/Initial'
import InterimNavigator from './Body/Navigators/Interim'
import ClosingNavigator from './Body/Navigators/Closing'
import FaqOption from './Body/Options/Faq'
import RatingOption from './Body/Options/Rating'
import FeedbackOption from './Body/Options/Feedback'

import 'styles/chatter/window/body.scss'

/*
Author:     Kyle Caprio
Purpose:    Chat interface head component
Input:      state, onSubmission, dispatchVisibility
Output:     Chat body components
*/

interface Props {
	state: WindowState
	onSubmission: (data: any) => void
	dispatchVisibility: (value: boolean) => void
	dispatchIdentity: (value: string) => void
	dispatchComponent: (value: string) => void
	isMobile: boolean
}

const Body: React.FC<Props> = (props) => {
	const { state } = props

	// Greeting component animation variants
	// Slides in view from bottom
	// Slides of view toward bottom
	const greetingVariants = {
		hidden: { opacity: 0, x: 0, y: 400 },
		visible: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -400 }
	}

	// General component animation variants
	// Slides in view from right side
	// Slides out of view toward left side
	const componentVariants = {
		hidden: { opacity: 0, y: 0, x: 300 },
		visible: { opacity: 1, y: 0, x: 0 },
		exit: { opacity: 0, y: 0, x: -300 }
	}

	return (
		<div className="chat-body">
			<div className="body-wrap scroller">
				<Motion
					visible={state.component.greeting}
					variants={greetingVariants}
					component={<Greeting {...props} />} />
				<Motion
					visible={state.component.initial}
					variants={componentVariants}
					component={<InitialNavigator {...props} />} />
				<Motion
					visible={state.component.interim}
					variants={componentVariants}
					component={<InterimNavigator {...props} />} />
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

import React from 'react'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chat/body/navigation.scss'
import 'styles/chat/common/button.scss'

const InitialNavigator: React.FC<any> = (props) => {
	const { dispatch } = props

	return (
		<div className="animated-content navigation">
			<ChatTitle text="How can we help you?" />
			<ChatButton text="FAQ Help" click={() => dispatch({ type: 'SET_COMPONENT', component: 'faqOption' })} />
			<ChatButton text="Rate Experience" click={() => dispatch({ type: 'SET_COMPONENT', component: 'ratingOption' })} />
			<ChatButton text="Give Feedback" click={() => dispatch({ type: 'SET_COMPONENT', component: 'feedbackOption' })} />
		</div>
	)
}

export default InitialNavigator
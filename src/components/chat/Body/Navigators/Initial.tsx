import React from 'react'

import ChatButton from 'components/Chat/Common/Button'
import ChatTitle from 'components/Chat/Common/Title'

import 'styles/chat/body/navigation.scss'
import 'styles/chat/common/button.scss'

const InitialNavigator: React.FC<any> = (props) => {
	const { dispatchComponent } = props

	return (
		<div className="animated-content navigation">
			<ChatTitle text="How can we help you?" />
			<div className="nav-btn-cont">
				<ChatButton
					text="FAQ Help"
					click={() => dispatchComponent('faqOption')} />
				<ChatButton
					text="Rate Experience"
					click={() => dispatchComponent('ratingOption')} />
				<ChatButton
					text="Give Feedback"
					click={() => dispatchComponent('feedbackOption')} />
			</div>
		</div>
	)
}

export default InitialNavigator
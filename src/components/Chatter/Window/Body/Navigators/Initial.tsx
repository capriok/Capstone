import React from 'react'

import ChatButton from 'components/Chatter/Window/Common/Button'
import ChatTitle from 'components/Chatter/Window/Common/Title'

import 'styles/chatter/window/body/navigation.scss'
import 'styles/chatter/window/common/button.scss'

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
import React from 'react'

import ChatButton from 'components/Chatter/Window/Common/Button'
import ChatTitle from 'components/Chatter/Window/Common/Title'

import 'styles/chatter/window/body/navigation.scss'
import 'styles/chatter/window/common/button.scss'

/*
Author:     Kyle Caprio
Purpose:    Primary navigation component
						In view when user has not chosen a current action
						User chooses what action they want to do
						Sets chat interface viewed component to chosen option
Input:      dispatchComponent
Output:     User help choice navigation prompt
*/

interface Props {
	dispatchComponent: (value: string) => void
}

const InitialNavigator: React.FC<Props> = (props) => {
	const { dispatchComponent } = props

	return (
		<div className="navigation">
			<ChatTitle text="How can we help you?" />
			<div className="nav-btn-cont" data-testid="nav-btns">
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
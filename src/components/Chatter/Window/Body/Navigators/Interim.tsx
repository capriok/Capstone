import React from 'react'

import ChatButton from 'components/Chatter/Window/Common/Button'
import ChatTitle from 'components/Chatter/Window/Common/Title'

import 'styles/chatter/window/body/navigation.scss'
import 'styles/chatter/window/common/button.scss'

/*
Author:     Kyle Caprio
Purpose:    Secondary navigation component
						In view when user is finished with previous action
						User chooses if they want more help or to end chat
						Sets chat interface component state to chosen option
Input:      dispatchComponent
Output:     User post-submission navigation prompt
*/

interface Props {
	dispatchComponent: (value: string) => void
}

const InterimNavigator: React.FC<Props> = (props) => {
	const { dispatchComponent } = props

	return (
		<div className="navigation">
			<ChatTitle text="Is there anything else?" />
			<div className="nav-btn-cont">
				<ChatButton
					text="More Help"
					click={() => dispatchComponent('initial')} />
				<ChatButton
					text="End Chat"
					click={() => dispatchComponent('closing')} />
			</div>
		</div>
	)
}

export default InterimNavigator
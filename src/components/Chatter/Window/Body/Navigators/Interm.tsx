import React from 'react'

import ChatButton from 'components/Chatter/Window/Common/Button'
import ChatTitle from 'components/Chatter/Window/Common/Title'

import 'styles/chatter/window/body/navigation.scss'
import 'styles/chatter/window/common/button.scss'

const IntermNavigator: React.FC<any> = (props) => {
	const { dispatchComponent } = props

	return (
		<div className="animated-content navigation">
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

export default IntermNavigator
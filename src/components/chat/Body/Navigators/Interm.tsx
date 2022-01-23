import React from 'react'

import ChatButton from 'components/Chat/Common/Button'
import ChatTitle from 'components/Chat/Common/Title'

import 'styles/chat/body/navigation.scss'
import 'styles/chat/common/button.scss'

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
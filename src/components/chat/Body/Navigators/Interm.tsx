import React from 'react'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chat/body/navigation.scss'
import 'styles/chat/common/button.scss'

const IntermNavigator: React.FC<any> = (props) => {
	const { dispatch } = props

	return (
		<div className="animated-content navigation">
			<ChatTitle text="Is there anything else?" />
			<ChatButton text="More Help" click={() => dispatch({ type: 'SET_COMPONENT', component: 'initial' })} />
			<ChatButton text="End Chat" click={() => dispatch({ type: 'SET_COMPONENT', component: 'closing' })} />
		</div>
	)
}

export default IntermNavigator
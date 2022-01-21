import React from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'

import 'styles/chat/head.scss'

const ChatHead: React.FC<any> = (props) => {
	const { state, dispatchVisibility } = props
	const { restaurantName } = useIndexJsonData()

	function toggleChatWindow() {
		dispatchVisibility(!state.window.visible)
	}

	return (
		<div
			className="chat-head"
			onClick={() => toggleChatWindow()}>
			<h3 className="index-name">{restaurantName}</h3>
			{state.window.visible &&
				<p className="user-identity">{state.user.identity}</p>
			}
		</div>
	)
}

export default ChatHead
import React from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'
import { WindowActions } from 'state'

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
			<h3>{restaurantName}</h3>
			<div className="visible-indicator">
				{state.window.visible ? '-' : '+'}
			</div>
		</div>
	)
}

export default ChatHead
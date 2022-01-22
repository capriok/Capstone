import React from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'

import 'styles/chat/head.scss'

const ChatHead: React.FC<any> = (props) => {
	const { state, dispatchVisibility, dispatchComponent } = props
	const { restaurantName } = useIndexJsonData()

	const isMobile = window.innerWidth < 500

	function toggleChatWindow() {
		dispatchVisibility(!state.window.visible)
	}

	return (
		<div
			className="chat-head"
			onClick={() => toggleChatWindow()}>
			{isMobile && !state.window.visible
				? <p className="mobile-name">Chat Now</p>
				: <h3 className="index-name">{restaurantName}</h3>
			}
			{state.window.visible &&
				<p className="user-identity">{state.user.identity}</p>
			}
		</div>
	)
}

export default ChatHead
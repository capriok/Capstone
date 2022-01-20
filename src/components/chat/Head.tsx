import React from 'react'

import indexJson from 'json/index.json'

import 'styles/chat/head.scss'

const ChatHead: React.FC<any> = (props) => {
	const { windowVisible, setWindowVisibility } = props
	const { restaurantName } = indexJson

	return (
		<div className="chat-head" onClick={() => setWindowVisibility(!windowVisible)}>
			<h3>{restaurantName}</h3>
			<div className="visible-indicator">{windowVisible ? '-' : '+'}</div>
		</div>
	)
}

export default ChatHead
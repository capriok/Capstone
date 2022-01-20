import React from 'react'

import indexJson from 'json/index.json'

import 'styles/chat/head.scss'

const ChatHead: React.FC<any> = (props) => {
	const { visible, setVisible } = props
	const { restaurantName } = indexJson

	return (
		<div className="chat-head" onClick={() => setVisible(!visible)}>
			<h3>{restaurantName}</h3>
			<div className="visible-indicator">{visible ? '-' : '+'}</div>
		</div>
	)
}

export default ChatHead
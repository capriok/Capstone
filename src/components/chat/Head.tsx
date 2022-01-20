import React from 'react'
import useIndexJsonData from 'helpers/useIndexJsonData'

import 'styles/chat/head.scss'

const ChatHead: React.FC<any> = ({ windowVisible, setWindowVisibility }) => {
	const { restaurantName } = useIndexJsonData()

	return (
		<div className="chat-head" onClick={() => setWindowVisibility(!windowVisible)}>
			<h3>{restaurantName}</h3>
			<div className="visible-indicator">{windowVisible ? '-' : '+'}</div>
		</div>
	)
}

export default ChatHead
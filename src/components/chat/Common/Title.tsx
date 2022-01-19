import React from 'react'

import 'styles/chat/common/title.scss'

const ChatTitle: React.FC<any> = (props) => {
	const { text } = props

	const className = () => {
		let cns = ['chat-title']
		return cns.join(' ')
	}

	return (
		<h3 className={className()}>{text}</h3>
	)
}

export default ChatTitle
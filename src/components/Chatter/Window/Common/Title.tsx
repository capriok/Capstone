import React from 'react'

import 'styles/chatter/window/common/title.scss'

interface Props {
	text: string
}

const ChatTitle: React.FC<Props> = (props) => {
	const { text } = props

	return (
		<h3 className="chat-title">{text}</h3>
	)
}

export default ChatTitle
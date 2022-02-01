import React from 'react'

import 'styles/chatter/window/common/title.scss'

interface Props {
	text: string
}

// Reusable styled title component used by components in view
const ChatTitle: React.FC<Props> = (props) => {
	const { text } = props

	return (
		<h3 className="chat-title">{text}</h3>
	)
}

export default ChatTitle
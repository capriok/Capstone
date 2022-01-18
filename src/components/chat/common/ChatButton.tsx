import React from 'react'

import 'styles/chat/common/chat-button.scss'

const ChatButton: React.FC<any> = (props) => {
	const { text, click } = props

	const cn = () => {
		let cns = ['chat-button']
		if (props.short) cns.push('short')
		return cns.join(' ')
	}

	return (
		<button className={cn()} onClick={click} disabled={props.disabled}>
			{text}
		</button>
	)
}

export default ChatButton
import React from 'react'

import 'styles/chat/common/button.scss'

interface Props {
	text: string
	id?: string
	form?: string
	submit?: boolean
	short?: boolean
	disabled?: boolean
	click?: () => any
}

const ChatButton: React.FC<Props> = (props) => {
	const { form, submit, id, short, disabled, text, click } = props

	const chatButtonClassName = `chat-button ${short && 'short'}`

	const buttonProps = { form, submit, id, disabled }

	return (
		<button
			{...buttonProps}
			type={submit ? 'submit' : 'button'}
			className={chatButtonClassName}
			onClick={click}>
			{text}
		</button>
	)
}

export default ChatButton
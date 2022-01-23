import React from 'react'

import 'styles/chatter/window/common/button.scss'

interface Props {
	text: string
	id?: string
	form?: string
	submit?: boolean
	disabled?: boolean
	click?: () => any
}

const ChatButton: React.FC<Props> = (props) => {
	const { form, submit, id, disabled, text, click } = props

	const buttonProps = { form, id, disabled }

	return (
		<button
			className="chat-button"
			type={submit ? 'submit' : 'button'}
			onClick={click}
			{...buttonProps}>
			{text}
		</button>
	)
}

export default ChatButton
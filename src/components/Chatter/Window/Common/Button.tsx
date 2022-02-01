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

// Reusable styled button component used for navigation and submission
const ChatButton: React.FC<Props> = (props) => {
	const { text, id, form, submit, disabled, click } = props

	const buttonProps = {
		className: 'chat-button',
		onClick: click,
		submit: submit ? 'submit' : 'button',
		form,
		id,
		disabled
	}

	return (
		<button {...buttonProps}>
			{text}
		</button>
	)
}

export default ChatButton
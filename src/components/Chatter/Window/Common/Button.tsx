import React from 'react'

import 'styles/chatter/window/common/button.scss'

/*
Author:     Kyle Caprio
Purpose:    Reusable styled button component used for navigation and submission
Input:      text, id, form, submit, disabled, click
Output:     Component button
*/

interface Props {
	text: string
	id?: string
	form?: string
	submit?: boolean
	disabled?: boolean
	click?: () => any
	testId?: string
}

const ChatButton: React.FC<Props> = (props) => {
	const { text, id, form, submit, disabled, click, testId } = props

	const buttonProps = {
		className: 'chat-button',
		onClick: click,
		submit: submit ? 'submit' : 'button',
		form,
		id,
		disabled
	}

	return (
		<button data-testid={testId} {...buttonProps}>
			{text}
		</button>
	)
}

export default ChatButton
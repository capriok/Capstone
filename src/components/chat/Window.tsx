import React, { useEffect, useReducer } from 'react'
import { WindowActions, windowReducer, windowReducerState } from 'state'

import ChatHead from './Head'
import ChatBody from './Body'

import 'styles/chat/window.scss'

interface Props {
	onSubmission: (data: any) => void
}

const ChatWindow: React.FC<Props> = ({ onSubmission }) => {
	const [state, dispatch] = useReducer(windowReducer, windowReducerState)

	function dispatchVisibility(value: boolean) {
		dispatch({ type: WindowActions.SETVIS, value })
	}

	function dispatchIdentity(value: string) {
		dispatch({ type: WindowActions.SETIDN, value })
	}

	function dispatchComponent(value: string) {
		dispatch({ type: WindowActions.SETCMP, value })
	}

	const props = {
		state,
		dispatchVisibility,
		dispatchIdentity,
		dispatchComponent,
		onSubmission
	}

	const chatVisibilityClassName = `chat-window ${state.window.visible ? 'visible' : ''}`

	return (
		<div className={chatVisibilityClassName}>
			<ChatHead {...props} />
			<ChatBody {...props} />
		</div>
	)
}

export default ChatWindow

ChatWindow.defaultProps = {
	onSubmission: (val: any) => { }
}
import React, { useEffect, useReducer } from 'react'
import { WindowActions, windowReducer, windowReducerState } from 'state'

import ChatHead from './Head'
import ChatBody from './Body'

import 'styles/chat/window.scss'

const ChatWindow: React.FC = () => {
	const [state, dispatch] = useReducer(windowReducer, windowReducerState)

	useEffect(() => {
		if (!state.window.visible)
			setTimeout(() =>
				dispatch({ type: WindowActions.SETCMP, value: 'greeting' }),
				500
			)
	}, [state.window.visible])

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
	}

	const chatVisibilityClassName = `chat-window ${state.window.visible && 'visible'}`

	return (
		<div className={chatVisibilityClassName}>
			<ChatHead {...props} />
			<ChatBody {...props} />
		</div>
	)
}

export default ChatWindow

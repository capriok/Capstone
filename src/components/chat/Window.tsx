import React, { useEffect, useReducer, useState } from 'react'

import ChatHead from './Head'
import ChatBody from './Body'

import 'styles/chat/window.scss'

const ChatWindow: React.FC = () => {
	const [windowVisible, setWindowVisibility] = useState(true)
	const [state, dispatch] = useReducer(componentReducer, componentState)

	useEffect(() => {
		if (!windowVisible) setTimeout(() => dispatch({ type: 'SET_COMPONENT', component: 'initial' }), 500)
	}, [windowVisible])

	const chatClassName = () => {
		let cns = ['chat-window']
		if (windowVisible) cns.push('visible')

		return cns.join(' ')
	}

	const props = { windowVisible, setWindowVisibility, state, dispatch }

	return (
		<div className={chatClassName()}>
			<ChatHead {...props} />
			<ChatBody {...props} />
		</div>
	)
}

export default ChatWindow

const componentState: Components = {
	initial: true,
	interm: false,
	closing: false,
	faqOption: false,
	ratingOption: false,
	feedbackOption: false,
}

export const componentReducer = (state: Components, action: ComponentAction): Components => {
	switch (action.type) {
		case 'SET_COMPONENT':
			Object.keys(componentState).forEach(key => state[key] = false)
			state[action.component] = true
			return { ...state }

		default:
			return { ...componentState }
	}
}
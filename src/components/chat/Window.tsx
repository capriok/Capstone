import React, { useEffect, useReducer, useState } from 'react'

import ChatHead from './Head'
import ChatBody from './Body'

import 'styles/chat/window.scss'

const ChatWindow: React.FC = () => {
	const [visible, setVisible] = useState(true)
	const [state, dispatch] = useReducer(componentReducer, componentState)

	useEffect(() => {
		if (!visible) setTimeout(() => dispatch({ type: 'SET_COMPONENT', component: 'helpNav' }), 500)
	}, [visible])

	const chatClassName = () => {
		let cns = ['chat-window']
		if (visible) cns.push('visible')

		return cns.join(' ')
	}

	const props = { visible, setVisible, state, dispatch }

	return (
		<div className={chatClassName()}>
			<ChatHead {...props} />
			<ChatBody {...props} />
		</div>
	)
}

export default ChatWindow

const componentState: Components = {
	helpNav: true,
	moreNav: false,
	endNav: false,
	faq: false,
	rating: false,
	feedback: false,
}

export const componentReducer = (state: Components, action: ComponentAction): Components => {
	switch (action.type) {
		case 'SET_COMPONENT':
			Object.keys(componentState).map((key, i) => {
				state[key] = false
			})
			state[action.component] = true
			return { ...state }

		default:
			return { ...componentState }
	}
}
import React from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'

import { BsChatSquareTextFill } from 'react-icons/bs'

import 'styles/chatter/window/head.scss'

/*
Author:     Kyle Caprio
Purpose:    Chat interface head component
Input:      state, onSubmission, dispatchVisibility
Output:     Chat header
*/

interface Props {
	state: WindowState
	dispatchVisibility: (value: boolean) => void
}

const Head: React.FC<Props> = (props) => {
	const { state, dispatchVisibility } = props

	// Custom hook to extract details from client supplied index json file
	// Returns all properties, retrievable via destructuring
	const { restaurantName } = useIndexJsonData()

	function toggleChatWindow() {
		// Toggles chat interface visibility

		dispatchVisibility(!state.window.visible)
	}

	return (
		<div className="chat-head" onClick={() => toggleChatWindow()}>
			{!state.window.visible
				? <p className="hidden"><BsChatSquareTextFill /></p>
				: <h3 className="visible">{restaurantName}</h3>
			}
			{state.window.visible &&
				<p className="identity">{state.user.identity}</p>
			}
		</div>
	)
}

export default Head
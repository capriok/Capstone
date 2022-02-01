import React from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'

import { BsChatSquareTextFill } from 'react-icons/bs'

import 'styles/chatter/window/head.scss'

interface Props {
	state: WindowState
	dispatchVisibility: (value: boolean) => void
}

// Chat interface head component
const Head: React.FC<Props> = (props) => {
	const { state, dispatchVisibility } = props

	// Custom hook to extract details from client supplied index json file
	//// Returns all properties, retrievable via destructuring
	const { restaurantName } = useIndexJsonData()

	// Function to toggle chat interface visibility
	function toggleChatWindow() {
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
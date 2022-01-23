import React from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'

import { BsChatSquareTextFill } from 'react-icons/bs'

import 'styles/chat/head.scss'

const Head: React.FC<any> = (props) => {
	const { state, dispatchVisibility } = props
	const { restaurantName } = useIndexJsonData()

	function toggleChatWindow() {
		dispatchVisibility(!state.window.visible)
	}

	return (
		<div className="head" onClick={() => toggleChatWindow()}>
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
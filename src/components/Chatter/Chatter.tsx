import React, { useEffect, useReducer } from 'react'
import { WindowActions, windowReducer, windowReducerState } from 'state'

import Window from './Window/Window'

import 'styles/chatter/chatter.scss'

interface Props {
	onSubmission: (data: any) => void
}

// Chat interface highest parent component
const Chatter: React.FC<Props> = (props) => {
	// Chat interface state and dispatch initialization
	const [state, dispatch] = useReducer(windowReducer, windowReducerState)
	// boolean value used for animation variance between view ports
	const isMobile = window.innerWidth < 500

	useEffect(() => {
		if (state.window.visible) return
		dispatchComponent('greeting')
	}, [state.window.visible])

	// Functions that manage the state of the chat interface

	// Toggles chat interface visibility from closed to open
	function dispatchVisibility(value: boolean) {
		dispatch({ type: WindowActions.SETVIS, value })
	}
	// Sets the user identity within the chat interface
	function dispatchIdentity(value: string) {
		dispatch({ type: WindowActions.SETIDN, value })
	}

	// Sets the currently viewed component chosen by the user
	function dispatchComponent(value: string) {
		dispatch({ type: WindowActions.SETCMP, value })
	}

	const windowProps = {
		...props,
		state,
		dispatchVisibility,
		dispatchIdentity,
		dispatchComponent,
		isMobile
	}

	return (
		<div id="chatter">
			<Window {...windowProps} />
		</div>
	)
}

export default Chatter
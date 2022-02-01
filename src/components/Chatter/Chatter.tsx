import React, { useEffect, useReducer } from 'react'
import { WindowActions, windowReducer, windowReducerState } from 'state'

import Window from './Window/Window'

import 'styles/chatter/chatter.scss'

/*
Author:     Kyle Caprio
Purpose:    Chat interface highest parent component
Input:      onSubmission
Output:     Chat window
*/

interface Props {
	onSubmission: (data: any) => void
}

const Chatter: React.FC<Props> = (props) => {
	// Chat interface state and dispatch initialization
	const [state, dispatch] = useReducer(windowReducer, windowReducerState)
	// boolean value used for animation variance between view ports
	const isMobile = window.innerWidth < 500

	useEffect(() => {
		// Resets chat interface component when visibility changes

		if (state.window.visible) return
		dispatchComponent('greeting')
	}, [state.window.visible])

	function dispatchVisibility(value: boolean) {
		// Toggles chat interface visibility from closed to open

		dispatch({ type: WindowActions.SETVIS, value })
	}

	function dispatchIdentity(value: string) {
		// Sets the user identity within the chat interface

		dispatch({ type: WindowActions.SETIDN, value })
	}

	function dispatchComponent(value: string) {
		// Sets the currently viewed component chosen by the user

		dispatch({ type: WindowActions.SETCMP, value })
	}

	// Window props for children components
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
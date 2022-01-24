import React, { useEffect, useReducer } from 'react'
import { WindowActions, windowReducer, windowReducerState } from 'state'

import Window from './Window/Window'

import 'styles/chatter/chatter.scss'

interface Props {
	onSubmission: (data: any) => void
}

const Chatter: React.FC<Props> = (props) => {
	const [state, dispatch] = useReducer(windowReducer, windowReducerState)
	const isMobile = window.innerWidth < 500

	useEffect(() => {
		if (state.window.visible) return
		dispatchComponent('greeting')
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

	const windowProps = {
		...props,
		state,
		dispatchVisibility,
		dispatchIdentity,
		dispatchComponent,
		isMobile
	}

	return (
		<div id="Chatter">
			<Window {...windowProps} />
		</div>
	)
}

export default Chatter
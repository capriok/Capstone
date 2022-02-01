import React, { useEffect } from 'react'

import ChatTitle from 'components/Chatter/Window/Common/Title'

import 'styles/chatter/window/body/navigation.scss'
import 'styles/chatter/window/common/button.scss'


interface Props {
	state: WindowState
	dispatchVisibility: (value: boolean) => void
	dispatchComponent: (value: string) => void
}

// Component viewed when user wishes to 'end chat' session
const ClosingNavigator: React.FC<Props> = (props) => {
	const { state, dispatchVisibility, dispatchComponent } = props

	useEffect(() => {
		if (!state.component.closing) return

		// Waits 2.5s after mount, sets chat interface visibility to 'closed'
		//// Waits .5s after chat interface is closed, resets viewed component to 'greeting'
		setTimeout(
			() => {
				dispatchVisibility(false)
				setTimeout(() => {
					dispatchComponent('greeting')
				}, 500)
			}
			, 2500
		)
	}, [state.component.closing])

	return (
		<div className="navigation">
			<ChatTitle text="Thank you." />
			<p className="closing-msg">Have a good day!</p>
		</div>
	)
}

export default ClosingNavigator
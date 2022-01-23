import React, { useEffect } from 'react'

import ChatTitle from 'components/Chatter/Window/Common/Title'

import 'styles/chatter/window/body/navigation.scss'
import 'styles/chatter/window/common/button.scss'

const ClosingNavigator: React.FC<any> = (props) => {
	const { state, dispatchVisibility, dispatchComponent } = props

	useEffect(() => {
		if (!state.component.closing) return
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
		<div className="animated-content navigation">
			<ChatTitle text="Thank you." />
			<p className="closing-msg">Have a good day!</p>
		</div>
	)
}

export default ClosingNavigator
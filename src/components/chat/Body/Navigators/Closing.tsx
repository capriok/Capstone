import React, { useEffect } from 'react'

import ChatTitle from 'components/Chat/Common/Title'

import 'styles/chat/body/navigation.scss'
import 'styles/chat/common/button.scss'

const ClosingNavigator: React.FC<any> = (props) => {
	const { state, setWindowVisibility } = props

	useEffect(() => {
		if (!state.closing) return
		setTimeout(() => {
			setWindowVisibility(false)
		}, 2500)
	}, [state.closing])

	return (
		<div className="animated-content navigation">
			<ChatTitle text="Thank you." />
			<p>Have a good day!</p>
		</div>
	)
}

export default ClosingNavigator
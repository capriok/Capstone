import React, { useEffect } from 'react'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chat/common/button.scss'
import 'styles/chat/body/navigation.scss'

const EndNavigation: React.FC<any> = (props) => {
	const { setVisible } = props

	useEffect(() => {
		setTimeout(() => {
			setVisible(false)
		}, 2500);
	}, [])

	return (
		<div className="navigation">
			<ChatTitle text="Thank you." />
			<p>Have a good day!</p>
		</div>
	)
}

export default EndNavigation
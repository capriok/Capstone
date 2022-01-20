import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import MotionAnimation from 'helpers/MotionDiv'

import ChatTitle from '../../Common/Title'

import 'styles/chat/common/button.scss'
import 'styles/chat/body/navigation.scss'

const EndNavigation: React.FC<any> = (props) => {
	const { state, setVisible } = props

	useEffect(() => {
		if (!state.endNav) return
		setTimeout(() => {
			setVisible(false)
		}, 2500)
	}, [state.endNav])

	return (
		<AnimatePresence>
			{state.endNav &&
				<MotionAnimation>
					<div className="navigation">
						<ChatTitle text="Thank you." />
						<p>Have a good day!</p>
					</div>
				</MotionAnimation>
			}
		</AnimatePresence>
	)
}

export default EndNavigation
import React from 'react'
import { AnimatePresence } from 'framer-motion'

import MotionAnimation from 'helpers/MotionDiv'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chat/common/button.scss'
import 'styles/chat/body/navigation.scss'

const MoreNavigation: React.FC<any> = (props) => {
	const { state, dispatch } = props

	return (
		<AnimatePresence>
			{state.moreNav &&
				<MotionAnimation>
					<div className="navigation">
						<ChatTitle text="Is there anything else?" />
						<ChatButton text="More Help" click={() => dispatch({ type: 'SET_COMPONENT', component: 'helpNav' })} />
						<ChatButton text="End Chat" click={() => dispatch({ type: 'SET_COMPONENT', component: 'endNav' })} />
					</div>
				</MotionAnimation>
			}
		</AnimatePresence>
	)
}

export default MoreNavigation
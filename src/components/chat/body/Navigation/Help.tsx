import React from 'react'
import { AnimatePresence } from 'framer-motion'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chat/common/button.scss'
import 'styles/chat/body/navigation.scss'
import MotionAnimation from 'helpers/MotionDiv'

const HelpNavigation: React.FC<any> = (props) => {
	const { state, dispatch } = props

	console.log(state);

	return (
		<AnimatePresence>
			{state.helpNav &&
				<MotionAnimation>
					<div className="navigation">
						<ChatTitle text="How can we help you?" />
						<ChatButton text="FAQ Help" click={() => dispatch({ type: 'SET_COMPONENT', component: 'faq' })} />
						<ChatButton text="Rate Experience" click={() => dispatch({ type: 'SET_COMPONENT', component: 'rating' })} />
						<ChatButton text="Give Feedback" click={() => dispatch({ type: 'SET_COMPONENT', component: 'feedback' })} />
					</div>
				</MotionAnimation>
			}
		</AnimatePresence>
	)
}

export default HelpNavigation
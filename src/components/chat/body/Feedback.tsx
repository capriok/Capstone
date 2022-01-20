import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MotionAnimation from 'helpers/MotionDiv'

import ChatTitle from '../Common/Title'
import ChatButton from '../Common/Button'

import 'styles/chat/body/feedback.scss'

const Feedback: React.FC<any> = (props) => {
	const { state, dispatch } = props
	const [feedback, setFeedback] = useState('')

	function submitClick() {
		console.log(feedback);
		dispatch({ type: 'SET_COMPONENT', component: 'moreNav' })
	}

	return (
		<AnimatePresence>
			{state.feedback &&
				<MotionAnimation>
					<div className="feedback">
						<ChatTitle text="Tell us how we can improve" />
						<textarea
							rows={3}
							onChange={(e) => setFeedback(e.target.value)}
							placeholder="Enter feedback 👍" />
						<div className="nav-btn-cont">
							<ChatButton disabled={feedback.length < 3} text="Submit" click={() => submitClick()} />
							<ChatButton text="Done" click={() => dispatch({ type: 'SET_COMPONENT', component: 'moreNav' })} />
						</div>
					</div>
				</MotionAnimation>
			}
		</AnimatePresence>
	)
}

export default Feedback
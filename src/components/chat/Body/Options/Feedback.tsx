import React, { useState } from 'react'

import ChatTitle from '../../Common/Title'
import ChatButton from '../../Common/Button'

import 'styles/chat/body/feedback.scss'

const FeedbackOption: React.FC<any> = (props) => {
	const { dispatch } = props
	const [feedback, setFeedback] = useState('')

	function submitClick() {
		console.log(feedback);
		dispatch({ type: 'SET_COMPONENT', component: 'initial' })
	}

	return (
		<div className="animated-content feedback">
			<ChatTitle text="Tell us how we can improve" />
			<textarea
				rows={3}
				onChange={(e) => setFeedback(e.target.value)}
				placeholder="Enter feedback 👍" />
			<div className="nav-btn-cont">
				<ChatButton disabled={feedback.length < 3} text="Submit" click={() => submitClick()} />
				<ChatButton text="Go Back" click={() => dispatch({ type: 'SET_COMPONENT', component: 'interm' })} />
			</div>
		</div>
	)
}

export default FeedbackOption
import React, { useState } from 'react'

import ChatTitle from '../Common/Title'

import 'styles/chat/body/feedback.scss'
import ChatButton from '../Common/Button'

const Feedback: React.FC<any> = (props) => {
	const { setHelper } = props
	const [feedback, setFeedback] = useState('')

	function submitClick() {
		console.log(feedback);
		setHelper('more-nav')
	}

	return (
		<div className="feedback">
			<ChatTitle text="Tell us how we can improve" />
			<textarea
				rows={3}
				onChange={(e) => setFeedback(e.target.value)}
				placeholder="Enter feedback 👍" />
			<div className="nav-btn-cont">
				<ChatButton disabled={feedback.length < 3} text="Submit" click={() => submitClick()} />
				<ChatButton text="Go Back" click={() => setHelper('help-nav')} />
			</div>
		</div>
	)
}

export default Feedback
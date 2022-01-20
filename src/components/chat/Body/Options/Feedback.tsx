import React, { useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

import ChatTitle from 'components/Chat/Common/Title'
import ChatButton from 'components/Chat/Common/Button'

import 'styles/chat/body/feedback.scss'

const FeedbackOption: React.FC<any> = (props) => {
	const { state, dispatchComponent } = props

	const [lsFeedbacks, setLsFeedbacks] = useLocalStorage('KC-Capstone-Feedback', [])

	const [feedback, setFeedback] = useState('')

	function submitClick() {
		console.log(feedback);
		setInLocalStorage(feedback)
		dispatchComponent('interm')
	}

	function setInLocalStorage(f: string) {
		console.log({ Feedback: lsFeedbacks })
		setLsFeedbacks([...lsFeedbacks, {
			identity: state.user.identity,
			feedback: f
		}])
	}

	return (
		<div className="animated-content feedback">
			<ChatTitle text="Tell us how we can improve" />
			<textarea
				rows={3}
				onChange={(e) => setFeedback(e.target.value)}
				placeholder="Enter feedback 👍" />
			<div className="nav-btn-cont">
				<ChatButton
					disabled={feedback.length < 3}
					text="Submit"
					click={() => submitClick()} />
				<ChatButton
					text="Go Back"
					click={() => dispatchComponent('initial')} />
			</div>
		</div>
	)
}

export default FeedbackOption
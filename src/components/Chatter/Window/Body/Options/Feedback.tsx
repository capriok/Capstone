import React, { useState } from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'
import { useLocalStorage } from 'hooks/useLocalStorage'

import ChatTitle from 'components/Chatter/Window/Common/Title'
import ChatButton from 'components/Chatter/Window/Common/Button'

import 'styles/chatter/window/body/feedback.scss'

interface Props {
	state: WindowState
	dispatchComponent: (value: string) => React.Dispatch<any>
	onSubmission: (val: any) => void
}
const FeedbackOption: React.FC<Props> = (props) => {
	const { state, dispatchComponent, onSubmission } = props

	const { restaurantName } = useIndexJsonData()
	const [lsFeedbacks, setLsFeedbacks] = useLocalStorage('KC-Capstone-Feedbacks')

	const [feedback, setFeedback] = useState('')

	function handleChange(val: string) {
		val = val.trim()
		setFeedback(val)
	}

	function submitClick() {
		setInLocalStorage(feedback)
		console.log({ FeedbackValue: feedback })
		dispatchComponent('interm')
	}

	function setInLocalStorage(feedback: string) {
		const newFeedbacks = [...lsFeedbacks, {
			date: new Date().toJSON(),
			client: restaurantName,
			identity: state.user.identity,
			data: feedback,
			statement: `${state.user.identity} said "${feedback}"`
		}]
		setLsFeedbacks(newFeedbacks)
		onSubmission({ feedback: newFeedbacks })
	}

	return (
		<div className="feedback">
			<ChatTitle text="Feedback Welcome" />
			<div className="textarea-wrap">
				<textarea
					rows={3}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Tell us about it 👍" />
			</div>
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
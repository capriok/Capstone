import React, { useState } from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'
import { useLocalStorage } from 'hooks/useLocalStorage'

import ChatTitle from 'components/Chatter/Window/Common/Title'
import ChatButton from 'components/Chatter/Window/Common/Button'

import 'styles/chatter/window/body/feedback.scss'

/*
Author:     Kyle Caprio
Purpose:    User feedback submission component
Input:      state, dispatchComponent, onSubmission
Output:     User feedback component
*/

interface Props {
	state: WindowState
	dispatchComponent: (value: string) => void
	onSubmission: (val: any) => void
}

const FeedbackOption: React.FC<Props> = (props) => {
	const { state, dispatchComponent, onSubmission } = props

	// Custom hook to extract details from client supplied index json file
	// Returns all properties, retrievable via destructuring
	const { restaurantName } = useIndexJsonData()

	// Gets feedback submissions stored in local storage from potential past sessions
	const [lsFeedbacks, setLsFeedbacks] = useLocalStorage('KC-Capstone-Feedbacks')

	// State storing value of user input
	const [feedback, setFeedback] = useState('')

	function handleChange(val: string) {
		// Trims user input value of spaces

		val = val.trim()
		setFeedback(val)
	}

	function submitClick() {
		// Stores user feedback in local storage
		// Sets chat interface component to interim navigation

		setInLocalStorage(feedback)
		console.log({ FeedbackValue: feedback })
		dispatchComponent('interim')
	}

	function setInLocalStorage(feedback: string) {
		// Creates object to store in local storage
		// Calls onSubmission callback with feedback submission

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
					data-testid="feedback-textarea"
					rows={3}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Tell us about it 👍" />
			</div>
			<div className="nav-btn-cont">
				<ChatButton
					testId="feedback-submit"
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
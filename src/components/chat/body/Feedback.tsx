import React from 'react'

import ChatTitle from '../common/ChatTitle'

import 'styles/chat/body/feedback.scss'

const Feedback: React.FC<any> = ({ }) => {
	return (
		<>
			<ChatTitle text="Tell us how we can improve" />
			<input type="text" placeholder="Enter Feedback" />
		</>
	)
}

export default Feedback
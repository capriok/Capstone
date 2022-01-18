import React from 'react'

import Navigation from './body/Navigation'
import Faq from './body/Faq'
import Rating from './body/Rating'
import Feedback from './body/Feedback'

import 'styles/chat/chat-body.scss'

const ChatBody: React.FC<any> = (props) => {
	const { helper, setHelper } = props

	return (
		<div className="chat-body">
			<div className="body-cont">
				{!helper && <Navigation setHelper={setHelper} />}

				{helper === 'faq' && <Faq setHelper={setHelper} />}
				{helper === 'rating' && <Rating setHelper={setHelper} />}
				{helper === 'feedback' && <Feedback setHelper={setHelper} />}
			</div>
		</div>
	)
}

export default ChatBody
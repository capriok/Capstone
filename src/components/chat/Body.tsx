import React from 'react'

import HelpNavigation from './Body/Navigation/Help'
import MoreNavigation from './Body/Navigation/More'
import EndNavigation from './Body/Navigation/End'

import Faq from './Body/Faq'
import Rating from './Body/Rating'
import Feedback from './Body/Feedback'

import 'styles/chat/body.scss'

const ChatBody: React.FC<any> = (props) => {

	props = { ...props }

	return (
		<div className="chat-body">
			<div className="body-cont">
				<HelpNavigation {...props} />
				<MoreNavigation {...props} />
				<EndNavigation {...props} />
				<Faq {...props} />
				<Rating {...props} />
				<Feedback {...props} />
			</div>
		</div>
	)
}

export default ChatBody
import React from 'react'

import HelpNavigation from './Body/Navigation/Help'
import MoreNavigation from './Body/Navigation/More'
import EndNavigation from './Body/Navigation/End'

import Faq from './Body/Faq'
import Rating from './Body/Rating'
import Feedback from './Body/Feedback'

import 'styles/chat/body.scss'

const ChatBody: React.FC<any> = (props) => {
	const { setVisible, helper, setHelper } = props

	return (
		<div className="chat-body">
			<div className="body-cont">
				{(() => {
					if (helper === 'help-nav')
						return <HelpNavigation setHelper={setHelper} />
					if (helper === 'more-nav')
						return <MoreNavigation setHelper={setHelper} />
					if (helper === 'end-nav')
						return <EndNavigation setVisible={setVisible} />

					if (helper === 'faq')
						return <Faq setHelper={setHelper} />
					if (helper === 'rating')
						return <Rating setHelper={setHelper} />
					if (helper === 'feedback')
						return <Feedback setHelper={setHelper} />
				})()}
			</div>
		</div>
	)
}

export default ChatBody
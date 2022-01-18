import React from 'react'

import ChatButton from '../common/ChatButton'
import ChatTitle from '../common/ChatTitle'

import 'styles/chat/common/chat-button.scss'
import 'styles/chat/body/navigation.scss'

const Navigation: React.FC<any> = (props) => {
	const { setHelper } = props

	return (
		<div className="navigation">
			<ChatTitle text="How can we help you?" />
			<ChatButton text="FAQ Help" click={() => setHelper('faq')} />
			<ChatButton text="Rate Experience" click={() => setHelper('rating')} />
			<ChatButton text="Give Feedback" click={() => setHelper('feedback')} />
		</div>
	)
}

export default Navigation
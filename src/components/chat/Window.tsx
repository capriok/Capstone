import React, { useEffect, useState } from 'react'

import ChatHead from './Head'
import ChatBody from './Body'

import 'styles/chat/window.scss'

const ChatWindow: React.FC = () => {
	const [visible, setVisible] = useState(true)
	const [helper, setHelper] = useState('help-nav')

	useEffect(() => {
		if (!visible) setTimeout(() => setHelper('help-nav'), 500)
	}, [visible])


	const chatClassName = () => {
		let cns = ['chat-window']
		if (visible) cns.push('visible')

		return cns.join(' ')
	}


	return (
		<div className={chatClassName()}>
			<ChatHead
				visible={visible}
				setVisible={setVisible} />
			<ChatBody
				visible={visible}
				setVisible={setVisible}
				helper={helper}
				setHelper={setHelper} />
		</div>
	)
}

export default ChatWindow
import React from 'react'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chat/common/button.scss'
import 'styles/chat/body/navigation.scss'

const MoreNavigation: React.FC<any> = (props) => {
	const { setHelper } = props

	return (
		<div className="navigation">
			<ChatTitle text="Is there anything else?" />
			<ChatButton text="More Help" click={() => setHelper('help-nav')} />
			<ChatButton text="End Chat" click={() => setHelper('end-nav')} />
		</div>
	)
}

export default MoreNavigation
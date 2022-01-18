import React, { useState } from 'react'
import useDynamicFaq from 'helpers/useDynamicData';

import ChatTitle from '../common/ChatTitle';

import 'styles/chat/body/faq.scss'

const ChatFaq: React.FC<any> = ({ }) => {
	const [faqTitle, setFaqTitle] = useState('Frequently Asked Questions')
	const [questioning, setQuestioning] = useState(true)
	const [chosenFaq, setChosenFaq] = useState({
		question: '', response: ''
	})

	function questionClick(faq: Faq) {
		console.log({ UserChoice: faq.question });
		console.log({ Response: faq.response });
		setFaqTitle(faq.question)
		setChosenFaq(faq)
		setQuestioning(false)
	}

	return (
		<div className="faq">
			<ChatTitle text={faqTitle} />
			{questioning
				? <FaqQuestioning click={questionClick} />
				: <FaqResponding faq={chosenFaq} />
			}
		</div>
	)
}

const FaqResponding: React.FC<{ faq: Faq }> = ({ faq }) => (
	<div className="responding">
		<div className="response">
			<h4 className="subtitle faded-underline">Response</h4>
			{faq.response}
		</div>
	</div>
)

const FaqQuestioning: React.FC<any> = ({ click }) => {
	const { dynamicFaq } = useDynamicFaq()

	return (
		<>
			{dynamicFaq.map(({ type, data }, i) => {
				return (
					<div className="questioning" key={i}>
						<h4 className="subtitle faded-underline">{type}</h4>
						{data.map((faq, i) => {
							return (
								<div key={i} className="question" onClick={() => click(faq)}>
									{faq.question}
								</div>
							)
						})}
					</div>
				)
			})}
		</>
	)
}

export default ChatFaq
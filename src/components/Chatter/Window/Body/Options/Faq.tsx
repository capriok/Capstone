import React, { useEffect, useState } from 'react'
import useFaqJsonData from 'hooks/useFaqJsonData';

import ChatTitle from 'components/Chatter/Window/Common/Title';
import ChatButton from 'components/Chatter/Window/Common/Button';

import 'styles/chatter/window/body/faq.scss'

const FaqOption: React.FC<any> = (props) => {
	const INITAL_TITLE = 'Frequently Asked Questions'
	const { faqJson } = useFaqJsonData()

	const { state, dispatchComponent } = props
	const [faqTitle, setFaqTitle] = useState(INITAL_TITLE)
	const [questioning, setQuestioning] = useState(true)
	const [chosenFaq, setChosenFaq] = useState<any>(undefined)

	function resetToQuestioning() {
		setFaqTitle(INITAL_TITLE)
		setQuestioning(true)
		setChosenFaq(undefined)
	}

	function questionClick(faq: Faq) {
		console.log({ UserChoice: faq.question });
		console.log({ Response: faq.response });
		setFaqTitle(faq.question)
		setChosenFaq(faq)
		setQuestioning(false)
	}

	useEffect(() => {
		if (!state.component.faqOption) {
			resetToQuestioning()
		}
	}, [state.component.faqOption])

	useEffect(() => {
		if (questioning) setFaqTitle(INITAL_TITLE)
	}, [questioning])

	return (
		<div className="faq">
			<ChatTitle text={faqTitle} />
			{questioning
				? <FaqQuestioning questions={faqJson} click={questionClick} />
				: <FaqResponding faq={chosenFaq} />
			}
			<div className="nav-btn-cont">
				{!questioning &&
					<ChatButton
						text="Go Back"
						click={resetToQuestioning} />
				}
				<ChatButton
					text="Done"
					click={() => dispatchComponent('interm')} />
			</div>
		</div>
	)
}

const FaqQuestioning: React.FC<{ questions: FaqJSON, click: (faq: Faq) => any }> = ({ questions, click }) => (
	<>
		{questions.map(({ type, data }, i) => {
			return (
				<div className="questioning" key={i}>
					<h4 className="subtitle faded-underline">{type}</h4>
					{data.map((faq, i) => {
						return (
							<div
								key={i}
								className="question"
								onClick={() => click(faq)}>
								{faq.question}
							</div>
						)
					})}
				</div>
			)
		})}
	</>
)


const FaqResponding: React.FC<{ faq: Faq }> = ({ faq }) => (
	<div className="responding">
		<div className="response">
			<h4 className="subtitle faded-underline">Response</h4>
			{faq.response}
			{faq.link.text &&
				<div className="link"><a
					href={faq.link.href}
					target="_blank"
					rel="noopener noreferrer">
					{faq.link.text}
				</a></div>
			}
		</div>
	</div>
)

export default FaqOption
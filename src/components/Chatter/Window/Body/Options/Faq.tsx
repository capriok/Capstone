import React, { useEffect, useRef, useState } from 'react'
import useFaqJsonData from 'hooks/useFaqJsonData';

import ChatTitle from 'components/Chatter/Window/Common/Title';
import ChatButton from 'components/Chatter/Window/Common/Button';

import 'styles/chatter/window/body/faq.scss'

const INIT_FAQ = {
	question: '',
	response: '',
	link: { text: '', href: '' }
}

const FaqOption: React.FC<any> = (props) => {
	const { state, dispatchComponent } = props

	const { faqJson } = useFaqJsonData()
	const ref: any = useRef(null)
	const [activeFaq, setActiveFaq] = useState<Faq>(INIT_FAQ)

	function questionClick(faq: Faq) {
		console.log({ UserChoice: faq.question })
		console.log({ Response: faq.response })
		setActiveFaq(faq)
	}

	function doneClick() {
		ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
		setTimeout(() => dispatchComponent('interm'), 550)
	}

	useEffect(() => {
		if (!state.component.faqOption) {
			setActiveFaq(INIT_FAQ)
		}
	}, [state.component.faqOption])

	return (
		<div className="faq">
			<div ref={ref} />
			<ChatTitle text="Frequently Asked Questions" />
			<div className="faq-wrap">
				{faqJson.map(({ type, data }, i) => (
					<div key={i} className="faq-type">
						<h4 className="subtitle faded-underline">{type}</h4>
						{data.map((faq, i) => (
							<div
								key={i}
								className={`question ${faq.response === activeFaq.response ? 'active' : ''}`}
								onClick={() => questionClick(faq)}>
								<div className="question-text">{faq.question}</div>
								{faq.response === activeFaq.response &&
									<FaqResponse faq={activeFaq} />
								}
							</div>
						))}
					</div>
				))}
			</div>
			<div className="nav-btn-cont">
				<ChatButton
					text="Done"
					click={() => doneClick()} />
			</div>
		</div>
	)
}

const FaqResponse: React.FC<any> = ({ faq }) => {
	return (
		<div className="response">
			<b>{faq.response}</b>
			{faq.link.text &&
				<div className="link">
					<a
						href={faq.link.href}
						target="_blank"
						rel="noopener noreferrer">
						{faq.link.text}
					</a>
				</div>
			}
		</div>
	)
}

export default FaqOption
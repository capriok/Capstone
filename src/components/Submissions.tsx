import { useLocalStorage } from 'hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

import 'styles/submissions.scss'

const Submissions: React.FC<any> = () => {
	const [dropdown, setDropdown] = useState(false)

	const [LsRatings] = useLocalStorage('KC-Capstone-Ratings', [])
	const [LsFeedback] = useLocalStorage('KC-Capstone-Feedbacks', [])

	function toggleDropdown() {
		setDropdown(d => !d)
	}

	return (
		<div className="submissions">
			<h3 className="title" onClick={() => toggleDropdown()}>
				<div className="text">Submissions</div>
				{dropdown
					? <div className="drop"><AiOutlineArrowUp /></div>
					: <div className="drop"><AiOutlineArrowDown /></div>
				}
			</h3>
			{dropdown &&
				<div className="submission-cont">
					<RatingsMap data={LsRatings} />
					<FeedbackMap data={LsFeedback} />
				</div>
			}
		</div>
	)
}

export default Submissions

const RatingsMap: React.FC<any> = ({ data }) => {
	return (
		<>
			<h4>Ratings ({data.length})</h4>
			{data.map((x: any, i: number) => (
				<div key={i} className="sub">
					<div className="header">
						<div className="date">
							{formatDate(x.date)}
						</div>
						<div className="client">
							{x.client}
						</div>
					</div>
					<div className="statement">
						{x.identity} rated their experience with {x.data} stars.
					</div>
				</div>
			))}
		</>
	)
}
const FeedbackMap: React.FC<any> = ({ data }) => {
	return (
		<>
			<h4>Feedback ({data.length})</h4>
			{data.map((x: any, i: number) => (
				<div key={i} className="sub">
					<div className="header">
						<div className="date">
							{formatDate(x.date)}
						</div>
						<div className="client">
							{x.client}
						</div>
					</div>
					<div className="statement">
						{x.identity} said "{x.data}".
					</div>
				</div>
			))}
		</>
	)
}

function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-us',
		{ month: 'numeric', day: '2-digit', year: 'numeric' }
	)
}
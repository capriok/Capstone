import React, { useState } from 'react'

import { HiOutlineDatabase, HiDatabase } from 'react-icons/hi'

import 'styles/capstone/submissions.scss'

/*
Author:     Kyle Caprio
Purpose:    Simulation of data viewing for presentation purposes
						Data supplied by user through chat interface submissions
Input:      submissions
Output:     Lists of submissions
*/

interface Props {
	submissions: Submissions
}

// 
const Submissions: React.FC<Props> = (props) => {
	const { submissions } = props

	// Boolean state controlling viewing of submissions dropdown
	const [dropdown, setDropdown] = useState(false)

	// Function to toggle boolean state of dropdown
	function toggleDropdown() {
		setDropdown(d => !d)
	}

	// If there are no submissions, do not render component
	if (!submissions.ratings.length && !submissions.feedback.length) return <></>

	return (
		<div className="submissions">
			<div
				title="View Submissions"
				className="title"
				onClick={() => toggleDropdown()}>
				{dropdown ? <HiDatabase /> : <HiOutlineDatabase />}
			</div>
			{dropdown &&
				<div className="sub-wrap">
					<SubmissionMap
						title="Ratings"
						data={submissions.ratings} />
					<SubmissionMap
						title="Feedback"
						data={submissions.feedback} />
				</div>
			}
		</div>
	)
}

export default Submissions

const SubmissionMap: React.FC<{ title: string, data: Array<any> }> = ({ title, data }) => (
	<>
		<h4 className="submission-title">{title} ({data.length})</h4>
		{data.map((x: any, i: number) => {
			return (
				<div key={i} className="sub">
					<div className="header">
						<div className="client">
							{x.client}
						</div>
						<div className="date">
							{new Date(x.date).toLocaleDateString('en-us',
								{ month: 'short', day: 'numeric', year: 'numeric' }
							)}
						</div>
					</div>
					<div className="statement">
						{x.statement}
					</div>
				</div>
			)
		})}
	</>
)


import React, { useState } from 'react'

import { HiOutlineDatabase, HiDatabase } from 'react-icons/hi'

import 'styles/capstone/submissions.scss'

interface Props {
	submissions: Submissions
}

const Submissions: React.FC<Props> = (props) => {
	const { submissions } = props
	const [dropdown, setDropdown] = useState(false)

	function toggleDropdown() {
		setDropdown(d => !d)
	}

	return (
		<div className="submissions">
			<div
				title="View Submissions"
				className="title"
				onClick={() => toggleDropdown()}>
				<div className="btn">
					{dropdown ? <HiDatabase /> : <HiOutlineDatabase />}
				</div>
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
		<h4>{title} ({data.length})</h4>
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


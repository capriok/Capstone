import React, { useState } from 'react'

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

import 'styles/submissions.scss'

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
			<h3 className="title" onClick={() => toggleDropdown()}>
				<div className="text">Submissions</div>
				<div className="drop">
					{dropdown
						? <AiOutlineArrowUp />
						: <AiOutlineArrowDown />
					}
				</div>
			</h3>
			{dropdown &&
				<div className="wrap">
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


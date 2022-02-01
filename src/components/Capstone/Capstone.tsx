import React from 'react'

import Submissions from './Submissions'
import Rasmussen from 'assets/rasmussen.png'

import 'styles/capstone/capstone.scss'

interface Props {
	submissions: Submissions
}

// Project introduction and Submissions database simulation component 
const Capstone: React.FC<Props> = (props) => {
	const { submissions } = props

	return (
		<div className="capstone">
			<div className="introduction">
				<img src={Rasmussen} alt="" />
				<h1>Capstone</h1>
				<p><i>Chatter</i> by Kyle Caprio</p>
			</div>
			<Submissions submissions={submissions} />
		</div>
	)
}

export default Capstone
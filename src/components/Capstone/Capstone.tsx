import React from 'react'

import Submissions from './Submissions'
import Rasmussen from 'assets/rasmussen.png'

import 'styles/capstone/capstone.scss'

/*
Author:     Kyle Caprio
Purpose:    Project introduction and Submissions database simulation component 
Input:      submissions
Output:     Project introduction, Submission viewing component
*/

interface Props {
	submissions: Submissions
}

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
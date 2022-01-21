import React from 'react'

import Submissions from './Submissions'

import 'styles/capstone.scss'

const Capstone: React.FC = () => {
	return (
		<div className="capstone">
			<div className="introduction">
				<h1>Capstone</h1>
				<p><i>Chatter</i> by Kyle Caprio</p>
			</div>
			<Submissions />
		</div>
	)
}

export default Capstone
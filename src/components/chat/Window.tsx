import React from 'react'
import { MotionProps, motion } from 'framer-motion'

import Head from './Head'
import Body from './Body'

import 'styles/chat/window.scss'

interface Props {
	state: WindowState
	dispatchVisibility: (value: boolean) => void
	dispatchIdentity: (value: string) => void
	dispatchComponent: (value: string) => void
	isMobile: boolean
	onSubmission: (data: any) => void
}

const Window: React.FC<Props> = (props) => {
	const { state, isMobile } = props

	const motionProps: MotionProps = {
		initial: "hidden",
		transition: {
			type: "spring",
			duration: 0.1,
			stiffness: 80,
			mass: .4
		},
		animate: state.window.visible ? 'visible' : 'hidden',
		variants: {
			hidden: {
				position: 'absolute',
				right: isMobile ? 10 : 50,
				bottom: 50,
				height: 0,
				width: 75
			},
			visible: {
				position: 'absolute',
				right: isMobile ? 0 : 50,
				bottom: 500,
				width: isMobile ? '100vw' : 350,
			}
		}
	}

	return (
		<motion.div {...motionProps}>
			<div className="window">
				<Head {...props} />
				<Body {...props} />
			</div>
		</motion.div>
	)
}

export default Window

Window.defaultProps = {
	onSubmission: (val: any) => { }
}
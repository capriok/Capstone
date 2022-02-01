import { ReactElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import 'styles/chatter/window/common/motion.scss'

interface Props {
	visible: boolean
	variants: any
	component: ReactElement<any>
}

// High order component to allow for animations between component mount/unmounts
//// Component visibility determined by chat interface 'component' boolean state
const Motion: React.FC<Props> = (props) => {
	const { visible, variants, component } = props

	// General animation properties required by Framer-motion component
	const motionProps = {
		whileInView: "visible",
		initial: "hidden",
		exit: "exit",
		viewport: { once: true },
		transition: {
			type: "spring",
			duration: 0.1,
			stiffness: 80,
			mass: .6
		},
		// Variants supplied as props to HOC component rendered by Body
		variants
	}

	return (
		<AnimatePresence>
			{visible &&
				<motion.div {...motionProps}>
					<div className="animated-content">
						{component}
					</div>
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default Motion
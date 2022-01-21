import { ReactElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
	visible: boolean
	variants?: any
	component: ReactElement<any>
}

const AnimatedComponent: React.FC<Props> = (props) => {
	const { visible, variants, component } = props

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
		variants: {
			hidden: { opacity: 0, y: 0, x: 300 },
			visible: { opacity: 1, y: 0, x: 0 },
			exit: { opacity: 0, y: 0, x: -300 },
			...variants
		}
	}

	return (
		<AnimatePresence>
			{visible &&
				<motion.div {...motionProps}>
					{component}
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default AnimatedComponent
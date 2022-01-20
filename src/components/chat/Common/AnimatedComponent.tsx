import { AnimatePresence, motion } from 'framer-motion'
import { ReactElement } from 'react'

interface Props {
	visible: boolean
	variants?: any
	component: ReactElement<any>
}

const AnimatedComponent: React.FC<Props> = (props) => {
	const { visible, variants, component } = props

	let defaultTransition = {
		type: "spring",
		duration: 0.1,
		stiffness: 80,
		mass: .6
	}
	let defaultVariants = {
		hidden: { opacity: 0, y: 0, x: 300 },
		visible: { opacity: 1, y: 0, x: 0 },
		exit: { opacity: 0, y: 0, x: -300 }
	}
	if (variants) defaultVariants = { ...defaultVariants, ...variants }

	return (
		<AnimatePresence>
			{visible &&
				<motion.div
					whileInView="visible"
					initial="hidden"
					exit="exit"
					viewport={{ once: true }}
					transition={defaultTransition}
					variants={defaultVariants}>
					{component}
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default AnimatedComponent
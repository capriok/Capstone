import { AnimatePresence, motion } from 'framer-motion'

const AnimatedContent: React.FC<any> = ({ visible, component }) => {
	return (
		<AnimatePresence>
			{visible &&
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.1, type: "spring", stiffness: 50 }}
					exit="exit"
					variants={{
						hidden: { opacity: 0, y: 0, x: 300 },
						visible: { opacity: 1, y: 0, x: 0 },
						exit: { opacity: 0, y: 0, x: -300 }
					}}>
					{component}
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default AnimatedContent
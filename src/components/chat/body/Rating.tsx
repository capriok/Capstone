import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MotionAnimation from 'helpers/MotionDiv'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import ChatTitle from '../Common/Title'
import ChatButton from '../Common/Button'

import 'styles/chat/body/rating.scss'

const Rating: React.FC<any> = (props) => {
	const { state, dispatch } = props

	const [rating, setRating] = useState(0)
	const [stars, setStars] = useState([
		<AiOutlineStar />,
		<AiOutlineStar />,
		<AiOutlineStar />,
		<AiOutlineStar />,
		<AiOutlineStar />
	])

	function starClick(i: number) {
		const starRating = stars.map((_, si) => {
			setRating(i + 1)
			return si <= i
				? <div className="full-star"><AiFillStar /></div>
				: <div className="null-star"><AiOutlineStar /></div>
		})
		setStars(starRating)
	}

	function submitClick() {
		console.log(rating);
		dispatch({ type: 'SET_COMPONENT', component: 'moreNav' })
	}

	return (
		<AnimatePresence>
			{state.rating &&
				<MotionAnimation>
					<div className="rating">
						<ChatTitle text="Star Rating" />
						<div className="star-cont">
							{stars.map((star, i) => (
								<div key={i} className="star"
									onClick={() => starClick(i)}>{star}</div>
							))}
						</div>
						<div className="nav-btn-cont">
							<ChatButton disabled={rating === 0} text="Submit" click={() => submitClick()} />
							<ChatButton text="Done" click={() => dispatch({ type: 'SET_COMPONENT', component: 'moreNav' })} />
						</div>
					</div>
				</MotionAnimation>
			}
		</AnimatePresence>
	)
}

export default Rating
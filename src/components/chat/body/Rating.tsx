import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import ChatTitle from '../common/ChatTitle'
import ChatButton from '../common/ChatButton'

import 'styles/chat/body/rating.scss'

const Rating: React.FC<any> = (props) => {
	const { setHelper } = props

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
		setHelper('')
	}
	return (
		<div className="rating">
			<ChatTitle text="Star Rating" />
			<div className="star-cont">
				{stars.map((star, i) => (
					<div className="star"
						onClick={() => starClick(i)}>{star}</div>
				))}
			</div>
			<br />
			<br />
			<ChatButton disabled={rating === 0} text="Submit" click={() => submitClick()} />
		</div>
	)
}

export default Rating
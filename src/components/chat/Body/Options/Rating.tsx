import React, { useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import ChatTitle from 'components/Chat/Common/Title'
import ChatButton from 'components/Chat/Common/Button'

import 'styles/chat/body/rating.scss'

const RatingOption: React.FC<any> = (props) => {
	const { state, dispatchComponent } = props

	const [lsRatings, setLsRatings] = useLocalStorage('KC-Capstone-Rating', [])

	const [rating, setRating] = useState(0)
	const [stars, setStars] = useState([
		<AiOutlineStar />,
		<AiOutlineStar />,
		<AiOutlineStar />,
		<AiOutlineStar />,
		<AiOutlineStar />
	])

	function starClick(i: number) {
		const iRating = i + 1
		const starRating = stars.map((_, si) => {
			setRating(iRating)
			return si <= i
				? <div className="full-star"><AiFillStar /></div>
				: <div className="null-star"><AiOutlineStar /></div>
		})
		setStars(starRating)
	}

	function submitClick() {
		console.log(rating);
		setInLocalStorage(rating)
		dispatchComponent('interm')
	}

	function setInLocalStorage(r: number) {
		console.log({ Ratings: lsRatings })
		setLsRatings([...lsRatings, {
			identity: state.user.identity,
			rating: r
		}])
	}

	return (
		<div className="animated-content rating">
			<ChatTitle text="Star Rating" />
			<div className="star-cont">
				{stars.map((star, i) => (
					<div
						key={i}
						className="star"
						onClick={() => starClick(i)}>{star}</div>
				))}
			</div>
			<div className="nav-btn-cont">
				<ChatButton
					disabled={rating === 0}
					text="Submit"
					click={() => submitClick()} />
				<ChatButton
					text="Go Back"
					click={() => dispatchComponent('initial')} />
			</div>
		</div>
	)
}

export default RatingOption
import React, { useEffect, useState } from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'
import { useLocalStorage } from 'hooks/useLocalStorage'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ChatTitle from 'components/Chatter/Window/Common/Title'
import ChatButton from 'components/Chatter/Window/Common/Button'

import 'styles/chatter/window/body/rating.scss'

interface Props {
	state: WindowState
	dispatchComponent: (value: string) => React.Dispatch<any>
	onSubmission: (val: any) => void
}

const RatingOption: React.FC<Props> = (props) => {
	const { state, dispatchComponent, onSubmission } = props

	const { restaurantName } = useIndexJsonData()
	const [lsRatings, setLsRatings] = useLocalStorage('KC-Capstone-Ratings')

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
		setInLocalStorage(rating)
		dispatchComponent('interm')
	}

	function setInLocalStorage(rating: number) {
		const newRatings = [...lsRatings, {
			date: new Date().toJSON(),
			client: restaurantName,
			identity: state.user.identity,
			data: rating,
			statement: `${state.user.identity} rated their experience with ${rating} stars`
		}]
		setLsRatings(newRatings)
		onSubmission({ ratings: newRatings })
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
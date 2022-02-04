import React, { useEffect, useState } from 'react'
import useIndexJsonData from 'hooks/useIndexJsonData'
import { useLocalStorage } from 'hooks/useLocalStorage'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ChatTitle from 'components/Chatter/Window/Common/Title'
import ChatButton from 'components/Chatter/Window/Common/Button'

import 'styles/chatter/window/body/rating.scss'

/*
Author:     Kyle Caprio
Purpose:    User rating submission component
Input:      state, dispatchComponent, onSubmission
Output:     User rating component
*/

interface Props {
	state: WindowState
	dispatchComponent: (value: string) => void
	onSubmission: (val: any) => void
}

const RatingOption: React.FC<Props> = (props) => {
	const { state, dispatchComponent, onSubmission } = props

	// Custom hook to extract details from client supplied index json file
	// Returns all properties, retrievable via destructuring
	const { restaurantName } = useIndexJsonData()

	// Gets rating submissions stored in local storage from potential past sessions
	const [lsRatings, setLsRatings] = useLocalStorage('KC-Capstone-Ratings')

	// State storing star rating of user input
	const [rating, setRating] = useState(0)

	// Creates Array of 5 stars 
	const [stars, setStars] = useState(Array.from([1, 2, 3, 4, 5]).map(i => <AiOutlineStar />))

	function starClick(i: number) {
		// Sets user star rating ui and state

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
		// Stores rating in local storage
		// Sets chat interface component to interim navigation

		setInLocalStorage(rating)
		console.log({ RatingValue: rating })
		dispatchComponent('interim')
	}

	function setInLocalStorage(rating: number) {
		// Creates object to store in local storage
		// Calls onSubmission callback with new rating submission

		const newRatings = [...lsRatings, {
			date: new Date().toJSON(),
			client: restaurantName,
			identity: state.user.identity,
			data: rating,
			statement: `${state.user.identity} submitted a ${rating} star rating`
		}]
		setLsRatings(newRatings)
		onSubmission({ ratings: newRatings })
	}

	return (
		<div className="rating">
			<ChatTitle text="Star Rating" />
			<div className="star-wrap" data-testid="star-rating">
				{stars.map((star, i) => (
					<div
						key={i}
						className="star"
						onClick={() => starClick(i)}>{star}</div>
				))}
			</div>
			<div className="nav-btn-cont">
				<ChatButton
					testId="rating-submit"
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
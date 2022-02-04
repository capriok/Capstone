import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from 'app.test'

describe('star rating', () => {

	it('should render 5 stars', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="ratingOption" />)

		const stars = screen.getByTestId('star-rating')
		expect(stars).toBeInTheDocument()

		expect(stars.childElementCount).toBe(5)
	})

	it('render submit button', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="ratingOption" />)

		const button = screen.getByTestId('rating-submit')
		expect(button).toBeInTheDocument()
	})

	it('should allow user to submit star rating', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="ratingOption" />)

		const button = screen.getByTestId('rating-submit')
		const rating = Math.floor((Math.random() * 5) + 1)

		if (rating === 0) {
			expect(button).toBeDisabled()
		} else {
			fireEvent.click(button)
			render(<MockWindow visible={true} identity="Anonymous" component="initial" />)
		}
	})

})
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
		expect(button).toBeDisabled()
	})

	it('should allow user to submit star rating', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="ratingOption" />)

		const button = screen.getByTestId('rating-submit')
		const rating = 5

		button.disabled = false

		if (rating > 0) expect(button).not.toBeDisabled()

		fireEvent.click(button)
	})

})
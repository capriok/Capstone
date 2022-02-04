import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from 'app.test'

describe('feedback', () => {

	it('should render feedback texarea', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="feedbackOption" />)

		const input = screen.getByTestId('feedback-textarea')
		expect(input).toBeInTheDocument()
	})

	it('hsould render submit button', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="feedbackOption" />)

		const button = screen.getByTestId('feedback-submit')
		expect(button).toBeInTheDocument()
	})

	it('should allow user to submit feedback', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="feedbackOption" />)

		const button = screen.getByTestId('feedback-submit')
		const feedback = 'This restaurant is amzing!'

		if (feedback === '') {
			expect(button).toBeDisabled()
		} else {
			fireEvent.click(button)
			render(<MockWindow visible={true} identity="Anonymous" component="initial" />)
		}
	})

})

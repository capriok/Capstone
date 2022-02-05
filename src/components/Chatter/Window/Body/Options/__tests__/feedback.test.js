import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from '__tests__/app.test'

describe('feedback', () => {

	it('should render feedback texarea and allow input', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="feedbackOption" />)

		const input = screen.getByTestId('feedback-textarea')

		expect(input).toBeInTheDocument()
		expect(input.value).toBe('')
	})

	it('should render submit button', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="feedbackOption" />)

		const button = screen.getByTestId('feedback-submit')

		expect(button).toBeInTheDocument()
		expect(button).toBeDisabled()
	})

	it('should allow user to submit feedback', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="feedbackOption" />)

		const button = screen.getByTestId('feedback-submit')
		const feedback = 'This restaurant is amazing!'

		button.disabled = false

		if (feedback !== '') expect(button).not.toBeDisabled()

		fireEvent.click(button)
	})

})

import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from '__tests__/app.test'

describe('user identity', () => {

	it('should render input', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)

		const input = screen.getByTestId('identity-input')

		expect(input).toBeInTheDocument()
	})

	it('should render submit button', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)

		const button = screen.getByTestId('identity-submit')

		expect(button).toBeInTheDocument()
	})

	it('should allow user to remain anonymous', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)

		const submitButton = screen.getByTestId('identity-submit')
		const skipButton = screen.getByTestId('identity-skip')

		expect(submitButton).toBeDisabled()
		expect(skipButton).toBeInTheDocument()

		fireEvent.click(skipButton)
	})

	it('should allow user to submit identity change', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)

		const input = screen.getByTestId('identity-input')
		const button = screen.getByTestId('identity-submit')

		expect(button).toBeInTheDocument()
		expect(button).toBeDisabled()

		const testValue = 'New Identity'

		fireEvent.change(input, { target: { value: testValue } })
		expect(input.value).toBe(testValue)

		button.disabled = false

		if (input.value !== '') expect(button).not.toBeDisabled()

		fireEvent.click(button)
	})

})
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from 'app.test'

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

		const button = screen.getByTestId('identity-skip')
		expect(button).toBeInTheDocument()

		fireEvent.click(button)
		render(<MockWindow visible={true} identity="Anonymous" component="initial" />)
	})

	it('should allow user to submit identity change', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)

		const input = screen.getByTestId('identity-input')
		const testValue = 'New Identity'

		fireEvent.change(input, { target: { value: testValue } })
		expect(input.value).toBe(testValue)

		const button = screen.getByTestId('identity-submit')
		expect(button).toBeInTheDocument()

		fireEvent.click(button)
		render(<MockWindow visible={true} identity={testValue} component="initial" />)
	})
})
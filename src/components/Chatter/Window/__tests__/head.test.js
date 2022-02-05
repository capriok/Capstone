import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from '__tests__/app.test'

import indexJson from 'json/index.json'

describe('head content', () => {

	it('should render client name as head title', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)

		const clientName = indexJson.restaurantName
		const title = screen.getByTestId('client-name')

		expect(title).toBeInTheDocument()
		expect(title).toHaveTextContent(clientName)
	})

	it('should render user identity as head identity', () => {
		const testIdentity = 'Anonymous'
		render(<MockWindow visible={true} identity={testIdentity} component="greeting" />)

		const identity = screen.getByTestId('user-identity')

		expect(identity).toBeInTheDocument()
		expect(identity).toHaveTextContent(testIdentity)
	})

})
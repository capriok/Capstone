import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Window from 'components/Chatter/Window/Window'

export const MockWindow = ({ visible, identity, component }) => {
	const state = {
		window: { visible: visible },
		user: { identity: identity },
		component: { [component]: true }
	}

	const windowProps = {
		onSubmission: jest.fn(),
		state: state,
		dispatchVisibility: jest.fn(),
		dispatchIdentity: jest.fn(),
		dispatchComponent: jest.fn(),
		isMobile: false
	}

	return (
		<Window {...windowProps} />
	)
}

it('should render window', () => {
	render(<MockWindow visible={false} identity="Anonymous" component="greeting" />)
})

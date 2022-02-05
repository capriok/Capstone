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
		onSubmission: (value) => { console.log({ SubmissionValue: value }) },
		state: state,
		dispatchVisibility: (value) => state.window.visible = value,
		dispatchIdentity: (value) => state.user.identity = value,
		dispatchComponent: (value) => state.component = { [value]: true },
		isMobile: false
	}

	return (
		<Window {...windowProps} />
	)
}

describe('chat window visibility', () => {

	it('should allow window to open', () => {
		render(<MockWindow visible={false} identity="Anonymous" component="greeting" />)
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)
	})

	it('should allow window to close', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="greeting" />)
		render(<MockWindow visible={false} identity="Anonymous" component="greeting" />)
	})

})
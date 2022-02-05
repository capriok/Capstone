import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from 'app.test'

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
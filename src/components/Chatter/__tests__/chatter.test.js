import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Chatter from 'components/Chatter/Chatter'

it('should render chatter', () => {
	render(<Chatter onSubmission={jest.fn()} />)
})

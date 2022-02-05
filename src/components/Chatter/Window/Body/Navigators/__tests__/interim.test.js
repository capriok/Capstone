import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from '__tests__/app.test'

describe('navigation buttons', () => {

	it('should render 2 buttons', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="interim" />)

		const buttons = screen.getByTestId('nav-btns')

		expect(buttons).toBeInTheDocument()
		expect(buttons.childElementCount).toBe(2)
	})

})
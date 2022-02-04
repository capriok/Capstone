import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MockWindow } from 'app.test'

import faqJson from 'json/faq.json'

describe('frequently asked questions help', () => {

	it('should render all faq types', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="faqOption" />)

		const jsonFaqTypesLength = faqJson.length

		const domFaqTypes = screen.getByTestId('faq-types')
		expect(domFaqTypes.childElementCount).toBe(jsonFaqTypesLength)
	})

	it('should render all faq questions', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="faqOption" />)

		let jsonTotalQuestions = 0
		faqJson.forEach(type => jsonTotalQuestions += type.data.length)

		const domTotalQuestions = screen.getAllByTestId('faq-question')

		expect(domTotalQuestions.length).toBe(jsonTotalQuestions)
	})

	it('should render done button', () => {
		render(<MockWindow visible={true} identity="Anonymous" component="faqOption" />)

		const button = screen.getByTestId('faq-done')
		expect(button).toBeInTheDocument()

		render(<MockWindow visible={true} identity="Anonymous" component="initial" />)
	})

})


import { useEffect, useState } from 'react'
import indexJson from 'json/index.json'
import faqJson from 'json/faq.json'


const useFaqJsonData = () => {
	const [json, setJson] = useState<FaqJSON>(faqJson)

	useEffect(() => {

		const transformedFaq = faqJson.map(({ type, data }) => {
			return {
				type,
				data: data.map((data) => {
					return {
						question: transformNameIndicator(data.question),
						response: transformNameIndicator(data.response),
						link: {
							text: data.link.text,
							href: transformNameIndicator(data.link.href)
						}
					}
				})
			}
		})

		setJson(transformedFaq)
	}, [])

	function transformNameIndicator(x: string) {
		if (!x) return ''
		return x.replace('**', indexJson.restaurantName)
	}

	return { faqJson: json }
}

export default useFaqJsonData
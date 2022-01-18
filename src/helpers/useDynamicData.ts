import { useEffect, useState } from 'react'
import indexJson from 'json/index.json'
import faqJson from 'json/faq.json'


const useDynamicFaq = () => {
	const [dynamicFaq, setFaq] = useState<FaqJSON>(faqJson)

	useEffect(() => {
		console.log(faqJson);

		const transformedFaq = faqJson.map(({ type, data }) => {
			return {
				type,
				data: data.map((data) => {
					return {
						question: transformStarIndicator(data.question),
						response: transformStarIndicator(data.response)
					}
				})
			}
		})
		console.log(transformedFaq);

		setFaq(transformedFaq)
	}, [])

	function transformStarIndicator(x: string) {
		return x.replace('**', indexJson.restaurantName)
	}

	return { dynamicFaq }
}

export default useDynamicFaq
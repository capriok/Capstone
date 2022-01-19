import { useEffect, useState } from 'react'
import indexJson from 'json/index.json'
import faqJson from 'json/faq.json'


const useDynamicFaq = () => {
	const [dynamicFaq, setFaq] = useState<FaqJSON>(faqJson)

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

		console.log({ OriginalData: faqJson })
		console.log({ TransformedData: transformedFaq })

		setFaq(transformedFaq)
	}, [])

	function transformNameIndicator(x: string) {
		if (!x) return ''
		return x.replace('**', indexJson.restaurantName)
	}

	return { dynamicFaq }
}

export default useDynamicFaq
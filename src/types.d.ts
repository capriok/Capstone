type FaqJSON = Array<FaqType>

interface FaqType {
	type: string
	data: Array<Faq>
}
interface Faq {
	question: string
	response: string
	link: FaqLink
}

interface FaqLink {
	text: string
	href: string
}

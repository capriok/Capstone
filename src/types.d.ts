
type ComponentAction =
	{ type: string, component: string }

type Components = {
	[key: string]: boolean
}

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

interface IndexJSON {
	restaurantName: string
}
type FaqJSON = Array<FaqType>

type WindowState = {
	window: {
		visible: boolean
	}
	user: {
		identity: string
	}
	component: Component
}

enum WindowActions {
	SETVIS = 'SetVisibility',
	SETIDN = 'SetIdentity',
	SETCMP = 'SetComponent'
}

type WindowAction =
	{ type: WindowActions.SETVIS, value: boolean }
	| { type: WindowActions.SETIDN, value: string }
	| { type: WindowActions.SETCMP, value: string }

type Component = {
	[key: string]: boolean
}

interface Submissions {
	ratings: Array<Rating>
	feedback: Array<Feedback>
}
interface Rating {
	date: Date
	identity: string
	data: number
}
interface Feedback {
	date: Date
	identity: string
	data: string
}

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

interface IndexJSON {
	restaurantName: string
}

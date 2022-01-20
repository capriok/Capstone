type WindowReducerState = {
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
type FaqJSON = Array<FaqType>

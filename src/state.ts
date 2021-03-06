// Chat interface highest-level of state
export const windowReducerState: WindowState = {
	window: {
		visible: false
	},
	user: {
		identity: 'Anonymous'
	},
	component: {
		greeting: true
	}
}

// Reducer dispatch types, enum type safe 
export enum WindowActions {
	SETVIS = 'SetVisibility',
	SETIDN = 'SetIdentity',
	SETCMP = 'SetComponent'
}

// Chat interface state reducer 
export const windowReducer = (state: WindowState, action: WindowAction): WindowState => {
	switch (action.type) {
		case WindowActions.SETVIS:
			state.window.visible = action.value
			return { ...state }

		case WindowActions.SETIDN:
			state.user.identity = action.value
			return { ...state }

		case WindowActions.SETCMP:
			state.component = { [action.value]: true }
			return { ...state }

		default:
			return { ...windowReducerState }
	}
}

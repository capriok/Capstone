export const windowReducerState: WindowReducerState = {
	window: {
		visible: true
	},
	user: {
		identity: 'Anonymous'
	},
	component: {
		initial: true
	}
}

export enum WindowActions {
	SETVIS = 'SetVisibility',
	SETIDN = 'SetIdentity',
	SETCMP = 'SetComponent'
}

export const windowReducer = (state: WindowReducerState, action: WindowAction): WindowReducerState => {
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

import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chatter/window/body/greeting.scss'

interface Props {
	state: WindowState
	dispatchIdentity: (value: string) => React.Dispatch<any>
	dispatchComponent: (value: string) => React.Dispatch<any>
	onSubmission: (val: any) => void
}

const Greeting: React.FC<Props> = (props) => {
	const { state, dispatchIdentity, dispatchComponent } = props

	const [lsIdentity, setLsIdentity] = useLocalStorage('KC-Capstone-Identity', {
		date: new Date(), name: state.user.identity
	})

	const [identityValue, setIdentityValue] = useState('')

	useEffect(() => {
		console.log({ Identity: lsIdentity })
		if (lsIdentity.name === 'Anonymous') return

		dispatchIdentity(lsIdentity.name)
		dispatchComponent('initial')
	}, [state.window.visible])

	function handleChange(val: string) {
		val = val.trim()
		setIdentityValue(val)
	}

	function submitClick(e: any) {
		e.preventDefault()
		if (!identityValue) return
		console.log({ IdentityValue: identityValue })
		setInLocalStorage(identityValue)
		dispatchIdentity(identityValue)
		dispatchComponent('initial')
	}

	function skipClick() {
		setInLocalStorage(state.user.identity)
		dispatchComponent('initial')
	}

	function setInLocalStorage(identityValue: string) {
		const newIdentity = {
			date: new Date().toJSON(),
			name: identityValue
		}
		console.log({ NewIdentity: newIdentity })
		setLsIdentity(newIdentity)
	}

	return (
		<div className="greeting">
			<ChatTitle text="Tell us who you are" />
			<form id="identity-form" onSubmit={(e) => submitClick(e)}>
				<input
					type="text"
					placeholder="Enter Name 📝"
					onChange={(e) => handleChange(e.target.value)} />
			</form>
			<div className="nav-btn-cont">
				<ChatButton
					submit
					form="identity-form"
					text="Continue"
					disabled={identityValue.length < 3} />
				{identityValue.length === 0 &&
					<ChatButton
						text="Skip"
						click={() => skipClick()} />
				}
			</div>
		</div>
	)
}

export default Greeting
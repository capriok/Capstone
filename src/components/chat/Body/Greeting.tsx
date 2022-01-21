import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

import ChatButton from '../Common/Button'
import ChatTitle from '../Common/Title'

import 'styles/chat/body/greeting.scss'

interface Props {
	state: WindowState
	dispatchIdentity: (value: string) => React.Dispatch<any>
	dispatchComponent: (value: string) => React.Dispatch<any>
	onSubmission: (val: any) => void
}

const Greeting: React.FC<Props> = (props) => {
	const { state, dispatchIdentity, dispatchComponent, onSubmission } = props

	const [lsIdentity, setLsIdentity] = useLocalStorage('KC-Capstone-Identity', { identity: state.user.identity })

	const [identityValue, setIdentityValue] = useState('')

	useEffect(() => {
		console.log({ Identity: lsIdentity })
		if (lsIdentity.identity !== 'Anonymous') {
			dispatchIdentity(lsIdentity.identity)
			dispatchComponent('initial')
		}
	}, [])

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

	function setInLocalStorage(iv: string) {
		const newIdentity = {
			date: new Date().toJSON(),
			identity: iv
		}
		console.log({ Identity: newIdentity })
		setLsIdentity(newIdentity)
	}

	return (
		<div className="animated-content greeting">
			<ChatTitle text="Tell us who you are" />
			<form id="identity-form" onSubmit={(e) => submitClick(e)}>
				<input
					type="text"
					placeholder="Enter Name 📝"
					onChange={(e) => setIdentityValue(e.target.value)} />
			</form>
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
	)
}

export default Greeting
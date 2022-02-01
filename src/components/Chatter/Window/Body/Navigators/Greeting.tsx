import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

import ChatButton from '../../Common/Button'
import ChatTitle from '../../Common/Title'

import 'styles/chatter/window/body/greeting.scss'

/*
Author:     Kyle Caprio
Purpose:    Component viewed when user first 'opens' chat interface
						Prompts user to give interface a name for use in user submissions
						Allows for user to skip step and remain anonymous (default)
Input:      state, dispatchIdentity, dispatchComponent
Output:     Greeting prompt
*/

interface Props {
	state: WindowState
	dispatchIdentity: (value: string) => void
	dispatchComponent: (value: string) => void
}

const Greeting: React.FC<Props> = (props) => {
	const { state, dispatchIdentity, dispatchComponent } = props

	// Gets current identity value stored in local storage from potential past sessions
	const [lsIdentity, setLsIdentity] = useLocalStorage('KC-Capstone-Identity', {
		date: new Date(), name: state.user.identity
	})

	const [identityValue, setIdentityValue] = useState('')

	useEffect(() => {
		// If local storage value is anonymous, do nothing

		console.log({ Identity: lsIdentity })
		if (lsIdentity.name === 'Anonymous') return

		// If local storage value is not anonymous
		// Sets chat interface identity state to local storage value
		// Sets chat interface component state to 'initial'  component

		dispatchIdentity(lsIdentity.name)
		dispatchComponent('initial')
	}, [state.window.visible])

	function handleChange(val: string) {
		// Trims user input value of spaces

		val = val.trim()
		setIdentityValue(val)
	}

	function submitClick(e: any) {
		// Stores user identity in local storage
		// Sets chat interface identity to initial navigation

		e.preventDefault()
		if (!identityValue) return
		console.log({ IdentityValue: identityValue })
		setInLocalStorage(identityValue)
		dispatchIdentity(identityValue)
		dispatchComponent('initial')
	}

	function skipClick() {
		// Stores 'Anonymous' identity in local storage
		// Sets chat interface component to initial navigation

		setInLocalStorage(state.user.identity)
		dispatchComponent('initial')
	}

	function setInLocalStorage(identityValue: string) {
		// Creates object to store in local storage

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
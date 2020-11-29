import { useState } from 'react'

const UseMultipleStateDemo = () => {
	const initialState = {
		firstName: "",
		lastName: ""
	}

	const [state, setState] = useState(initialState)


	const handleOnChange = (e) => {
		setState(prevState => {
			return {
				...prevState,
				[e.target.name]: e.target.value
			}
		})
	}

	return (
		<div>
		<h3>Multiple state variables</h3>
			First Name: {state.firstName}
			<br/>
			<input type="text" value={state.firstName} onChange={handleOnChange} name="firstName"/>
			<br/>
			<br/>

			Last Name: {state.lastName}
			<br/>
			<input type="text" value={state.lastName} onChange={handleOnChange} name="lastName"/>
		</div>
		)
}


export default UseMultipleStateDemo
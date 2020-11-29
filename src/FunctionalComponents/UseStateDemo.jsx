import { useState } from 'react'

const UseStateDemo = () => {
	const [name, setName] = useState("")

	const handleOnChange = (e) => {
		setName(e.target.value)
	} 

	return (
		<div>
			<h3>Functional Component</h3>
			{name}
			<br/>
			<br/>
			<input type="text" value={name} onChange={handleOnChange}/>
		</div>
		)

}

export default UseStateDemo
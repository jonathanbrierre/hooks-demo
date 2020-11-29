import { Component } from "react"

class ClassStateDemo extends Component {
	state = {
		name: ""
	}

	handleOnChange = (e) => {
		this.setState({[e.target.name] : e.target.value})
	}

	render(){
		return(
			<div>
				<h3>Class Component</h3>
				{this.state.name}
				<br/>
				<br/>
				<input type="text" value={this.state.name} name="name" onChange={this.handleOnChange}/>
			</div>
			)
	}
}

export default ClassStateDemo
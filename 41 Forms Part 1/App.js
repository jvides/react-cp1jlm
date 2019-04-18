import React from "react"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)  
  }
  handleChange(event) {
    //do this instead
    const {name,value} = event.target
    this.setState({
      //name of the control must match the variable name declared in state
      //though this works, stay away from this because of sometimes causes bugs. Lookup react synthetic events
      //[event.target.name]: event.target.value
      [name]:value
    }) 
  }

  render() {
    return (
      <form>
        <input type="text" 
        value={this.state.firstName} 
        name="firstName" 
        placeholder="First Name" 
        onChange={this.handleChange} />
        <br/>
        <input type="text" 
        value={this.state.lastName}
        name="lastName" 
        placeholder="Last Name" 
        onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}

export default App
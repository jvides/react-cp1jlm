import React from "react"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name,value} = event.target
    this.setState({
      [name]:value
    }) 
  }

  render(){
    return(
      <form>
      <input 
        name="firstName"
        value={this.state.firstName}
        placeholder="First Name"
        onChange={this.handleChange}
      /><br/>
      <input 
        name="lastName"
        value={this.state.lastName}
        placeholder="Last Name"
        onChange={this.handleChange}
      /><br/> 
      <input 
        name="age"
        value={this.state.age}
        placeholder="Ages"
        onChange={this.handleChange}
      />
      <button>Submit</button>
      <hr/>           
      <h1>Entered Information </h1>
      Your name: {this.state.firstName} {this.state.lastName} <br/>
      Your age: {this.state.age}
      </form>
    )
  }
}

export default App
import React from "react"

import LoginComponent from "./LoginComponent"

class LoginContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      isLoggedId: false
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
      <LoginComponent 
        handleChange={this.handleChange}
        data={this.state}
      />
    )

  }
}

export default LoginContainer
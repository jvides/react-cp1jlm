import React from "react"
import FormComponent from "./FormComponent"

class Form extends React.Component {
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
      <FormComponent 
        handleChange={this.handleChange}
        data={this.state}
      />
    )

  }
}

export default Form
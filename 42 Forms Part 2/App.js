import React from "react"

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})    
  }

  render(){
    return(
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
        <textarea 
          onChange={this.handleChange} />
        <br/>
        <label>
          <input 
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is Friendly
        </label> 
        <br/>
        <label>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>         
        <label>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>  
        <br/>
        <select 
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red">red</option>
          <option value="white">white</option>
          <option value="blue">blue</option>
          <option value="brown">brown</option>
        </select>
        <h1> You're a {this.state.gender}</h1>
        <h2>Your favorite color {this.state.favColor}</h2>
        <button>Submit</button>
        // FORMIK IS A JAVASCRIPT API THAT MAKES USING FORMS MUCH EASIER
      </form>
    )
  }
}

export default App
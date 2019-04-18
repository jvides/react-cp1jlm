
import React from "react"
import ReactDOM from "react-dom"

//Lesson 1 in state mgmt
class App extends React.Component{
  constructor(){
    super()
    this.state ={
      isLoggedIn: false
    }
  }
  render(){
    return(
      <div>
        <h1>You are currently logged {(this.state.isLoggedIn) ? "In" : "Out"}</h1> 
      </div>
    )
  }
}

export default App
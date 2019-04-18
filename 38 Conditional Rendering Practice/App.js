import React from "react"

class App extends React.Component{
constructor(){
  super()
  this.state = {
    isLoggedIn : false
  }
  this.btnOnClick = this.btnOnClick.bind(this)  
}

btnOnClick() {
//change state isLoggedIn variable
  this.setState(prevState => {
    return {
      //return the opposite of the object literal since it's a boolean
      isLoggedIn: !prevState.isLoggedIn
    }
  })
}

render(){
  let buttonText = this.state.isLoggedIn ? "Logout" : "Login"
  let displayText = this.state.isLoggedIn ? "Logged In" : "Loged out"
  return(
    <div> 
      Click the button to:<br/>
      <button onClick={this.btnOnClick}>{buttonText}</button>
      <h1>{displayText}</h1>
    </div>
  )
}
}

export default App
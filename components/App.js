import React from "react"
import LoginContainer from "./LoginContainer"
import Grid from "./Grid"
import Header from "./Header"
import Dashboard from "./UI/Dashboard"
import AdminComponent from "./UI/AdminComponent"
import SignIn from "./SignIn"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      userRole: "business"
    }   
    
    this.onHandleClick = this.onHandleClick.bind(this) 
  }
   onHandleClick(event) { 
    this.setState(prevState => {
      return {
        //TODO. this is is just a stub. Will need to add logic on form to actually check credentials.
        isLoggedIn: true
      }
    })    
  }
  //generates components bases on the role of the given user
  renderComponent() {
     switch(this.state.userRole) {
      case 'business':
        //return <Dasboard />
        return <Test />
      case 'supplier':
        return 'drink' 
     }
  }

  render(){    
    return(
      <div>
        <Header/>
        {//conditional rendering of login form if the user hasn't authenticated
        }
        {this.state.isLoggedIn ? 
          <AdminComponent 
            pageTitle="Dashboard" 
            userRole={this.state.userRole}
            contentComponent={this.renderComponent}
          /> :
          <SignIn HandleOnClick={this.onHandleClick}/> 
        }

      </div>
    )
  }
}

export default App
import React from "react"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count:0
    }
    this.onHandleClick = this.onHandleClick.bind(this)
  }
  onHandleClick() {
    this.setState( prevState => {
      return {
        count: prevState.count + 1
        }
    })
    console.log(this.state.count)
  }
  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onHandleClick}>Change</button>
      </div>
    )    
  }

}

export default App
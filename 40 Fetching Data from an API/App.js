import React from "react"

//fetch is used to get data from an api
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

//starwars API is used for dev/testing APIs
// https://swapi.co/

//website on promises
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      character: {}      
    }
  }
  //get data from API before page loads
  componentDidMount() {
    this.setState({isLoading: true})
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      //check to see if it works //.then(data => console.log(data))
      .then(data => {
        this.setState({
          isLoading: false,
          character: data          
        })
      })    
  }

  render() {
    const text = this.state.isLoading ? "Loading" : this.state.character.name
    return (
      <div>
        hello<br/> 
        {text}              
       </div>
    )
  }
}

export default App
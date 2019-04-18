import React from "react"
import ReactDOM from "react-dom"

import ToDoItem from "./ToDoItem"
import todosData from "./todosData"

//LEFT ON 2:21 OF TUTORIAL


class App extends React.Component{
  constructor(){
    super()
    
    this.state = {
      toDos: todosData
    } 
  } 
  render(){
    const todoItems = this.state.toDos.map(item => <ToDoItem key={item.id} item={item}/>)

    return(
      <div> {todoItems} </div>
    )
  }
}
export default App
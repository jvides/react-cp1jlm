import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData"



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      toDos : todosData 
    }   
    this.onHandleClick = this.onHandleClick.bind(this)
  }

  onHandleClick(id) {
    console.log("It fired", id)
    //DELETE EVERYTHING IN THIS FUNCTION BELOW THIS LINE TO GET THE ERROR TO GO AWAY
    this.setState(prevState => {
      //loop through arrray for given id
      const updatedTodos = this.prevState.toDos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        toDos: updatedTodos
      }
    })

  }
  render(){
    const todoItems = this.state.toDos.map(item => <TodoItem key={item.id} id={item.id} activity={item.task} onHandleClick={this.onHandleClick}/>)
    

    return(
        <div>
          hello <br/>
          {todoItems}
        </div>
    )  
  }
}

export default App
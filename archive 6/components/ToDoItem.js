import React from "react"

class ToDoItem extends React.Component{
  render(){
    return(
      <div>
      <ul>
        <li></li>
      </ul>
      </div>
    )
  }
}

function ToDoItem(props){
  return(
    <div>
      <input type="checkbox" checked={props.ToDoItem.completed}/>
      <p>{props.ToDoItem.text}</p>
    </div>
  )
}
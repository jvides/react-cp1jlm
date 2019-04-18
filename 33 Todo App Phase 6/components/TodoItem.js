import React from "react"

function TodoITem(props) {
  return(
    <div>
      <input 
        type="checkbox" 
        id= {props.id}
        checked={props.completed}
        onChange={(event) => props.onHandleClick(props.id)}
        />
      <p>{props.activity}</p>
    </div>
  )
}

export default TodoITem
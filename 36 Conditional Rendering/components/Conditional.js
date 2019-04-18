import React from "react"

function Conditional (props){
  if(props.isLoading === true){
    return (
      <h1> Loading.... </h1>
    )
  } else {
    return (
      <h1>Now loaded</h1>
    )
  }

  console.log(props.isLoading)

}

export default Conditional



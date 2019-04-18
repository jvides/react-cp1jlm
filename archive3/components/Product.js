import React from "react"

function Product(props){
  return(

    <div>
      <h1>Name: {props.name}</h1>
      <h2>Price: {props.price}</h2>            
      <h3>Description: {props.description}</h3>                
    </div>
  )
}
export default Product
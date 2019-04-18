import React from "react"


function FormComponent(props){
    return(
      <form>
      <input 
        name="firstName"
        value={props.data.firstName}
        placeholder="First Name"
        onChange={props.handleChange}
      /><br/>
      <input 
        name="lastName"
        value={props.data.lastName}
        placeholder="Last Name"
        onChange={props.handleChange}
      /><br/> 
      <input 
        name="age"
        value={props.data.age}
        placeholder="Ages"
        onChange={props.handleChange}
      />
      <button>Submit</button>
      <hr/>           
      <h1>Entered Information </h1>
      Your name: {props.data.firstName} {props.data.lastName} <br/>
      Your age: {props.data.age}
      </form>
    )  
}

export default FormComponent
import React from "react"


function Category(props) {
  return (
         <form name="frmAttributeAdd">
          <h2> 1) Configure Data Model </h2>
          <input 
            name="attributeName" 
            value={props.attributeName}
            placeholder="Attribute Name" 
          />
          <input 
            name="dataType" 
            value={props.dataType}
            placeholder="Data Type" 
          />
          <input 
            name="length" 
            value={props.length}
            placeholder="Length" 
          />
          <input 
            name="order" 
            value={props.order}
            placeholder="order" 
          />
          <button 
            name="btnSubmit"
          >
          Add
          </button>
        </form>
  )
}

export default Category
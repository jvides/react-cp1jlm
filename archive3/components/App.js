import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"
import Product from "./Product"
import productData from "./productData"

function App (){
  const jokeComponent = jokesData.map(joke => <Joke key={joke.id} question={joke.question}
  punchLine={joke.punchLine} />)

  const productComponent = productData.map(product => <Product name={product.name} 
  price={product.price} description={product.description} />)

  return(
    <div>
      {jokeComponent}
      {productComponent}
    </div>
  )
}
export default App
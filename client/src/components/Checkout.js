import React from "react"

import { useItems } from "../hooks"
import "../styles/products.css"

export default props => {
  const { cart, total } = useItems()

  return (
    <div className="receiptProducts">
      <h1>Your total was: ${total}</h1> <br />
      <h1>Thank you for shopping with AllSports!</h1>
      <div className="receiptSummary">
        {cart.map((product, i) => (
          <div className="listedProd" key={product.id}>
            <div className="prodDetails">
              {product.title}
              <br />${product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

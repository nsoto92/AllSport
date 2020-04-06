import React from "react"

import { useItems } from "../hooks"

export default props => {
  const { cart, total } = useItems()

  return (
    <div className="receiptProducts">
      <h1>Your total was: ${total}</h1> <br />
      <h1>Thank you for shopping with AllSports!</h1>
      <div className="receiptSummary">
        {cart.map((product, i) => (
          <div className="receiptProducts" key={"receipt-product-" + i}>
            <img className="receiptProductImg" alt="" src={product.image} />
            <p className="receiptProductTitle">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

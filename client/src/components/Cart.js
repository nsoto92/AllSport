import React from "react"
import { useItems } from "../hooks"

import { FaShoppingCart } from "react-icons/fa"

export default function(e) {
  const { cart } = useItems()

  return (
    <div className="cart">
      <FaShoppingCart />
      <h1>Cart</h1>
      {cart.map(product => (
        <div className="productcart">
          <img src={product.image} />
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <div>
        <h2>Total: 0 </h2>
      </div>
    </div>
  )
}

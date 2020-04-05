import React from "react"
import { useItems } from "../hooks"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/products.css"

import { FaTimes } from "react-icons/fa"

export default function(e) {
  const { cart, status, toggle, total, del } = useItems()

  return (
    <div id={status ? "cartItems" : "cartItems closed"}>
      <FaTimes
        onClick={toggle}
        className={
          status
            ? "nav-item  rounded-circle mx-2 basket-icon"
            : "nav-item  rounded-circle mx-2 basket-icon closed"
        }
      />{" "}
      [Close]
      <h1>Cart</h1>
      <p className="cartTitle">{cart.length} item(s) are in your cart</p>
      {cart.map(product => (
        <div className="prod" key={product.id}>
          <img className="prodImg" src={product.image} />
          {product.title}
          <br />${product.price}
          <br />
          <button onClick={e => del(product)} className="prodCart">
            Remove
          </button>
        </div>
      ))}
      <div>
        <h3> Total: ${total}</h3>
      </div>
    </div>
  )
}

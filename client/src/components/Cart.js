// Coded by Norbert M. Soto (https://github.com/nsoto92)

import React from "react"
import { useItems } from "../hooks"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/products.css"

import { FaTimes } from "react-icons/fa"

export default function(e) {
  const { cart, status, toggle, total, del } = useItems()

  return (
    <div className={status ? "cartItems" : "cartItems closed"}>
      <FaTimes
        onClick={toggle}
        className={
          status
            ? "nav-item  rounded-circle mx-2 basket-icon"
            : "nav-item  rounded-circle mx-2 basket-icon closed"
        }
      />{" "}
      <div className="cartAS">
        <h1>Cart</h1>
        <p className="cartTitle">{cart.length} item(s) are in your cart</p>
        <div className="buyItems">
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
        </div>
      </div>
      <div>
        <h3> Total: ${total}</h3>
        <Link to="/checkout">
          <p>CHECKOUT</p>
        </Link>
      </div>
    </div>
  )
}

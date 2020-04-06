// Coded by Norbert M. Soto (https://github.com/nsoto92)

import React from "react"
import { useProducts } from "../hooks"
import { useItems } from "../hooks"

import { FaShoppingCart } from "react-icons/fa"

import "../styles/products.css"

console.log(useProducts)
export default props => {
  const { products } = useProducts()
  const { add } = useItems()

  return (
    <div className="prodWrapper">
      <div className="orderSelect">
        <p> {products.length} Product(s) found.</p>
      </div>

      <div>
        <div>
          <div className="prodList">
            {products.map(product => (
              <div className="prod" key={product.id}>
                <img className="prodImg" src={product.image} />
                {product.title}
                <br />${product.price}
                <br />
                <button onClick={e => add(product)} className="prodCart">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

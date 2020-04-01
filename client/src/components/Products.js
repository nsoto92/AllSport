import React from "react"
import { useProducts } from "../hooks"
import { useItems } from "../hooks"

import "../styles/products.css"

console.log(useProducts)
export default props => {
  const { products } = useProducts()
  const { add } = useItems()

  return (
    <div>
      <div>
        <div className="prodList">
          {products.map(product => (
            <div className="product" key={product.id}>
              <img src={product.image} />
              {product.title}
              <br />
              {product.price}
              <br />
              <button onClick={e => add(product)} className="addtocart">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from "react"
import { useProducts } from "../hooks"
import { useItems } from "../hooks"

import "../styles/products.css"

console.log(useProducts)
export default props => {
  const { products } = useProducts()
  const { add } = useItems()

  return (
    <div className="prodWrapper">
      <div className="orderSelect">
        <p> Product(s) found.</p>
        <div>
          <label htmlFor="orderBy">Order by </label>

          <select id="orderBy">
            <option value="select">Select</option>
            <option value="LowestToHighest">Lowest To highest</option>
            <option value="HighestToLowest">Highest To lowest</option>
          </select>
        </div>
      </div>

      <div>
        <div>
          <div className="prodList">
            {products.map(product => (
              <div className="prod" key={product.id}>
                <img className="prodImg" src={product.image} />
                {product.title}
                <br />
                {product.price}
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

import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const GET_STATUS = "cart/GET_STATUS"
const ADD_PRODUCT = "cart/ADD_PRODUCT"
const DELETE_PRODUCT = "cart/DELETE_PRODUCT"

const initialState = {
  cart: [],
  open: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] }
    case GET_STATUS:
      return { ...state, open: !state.open }
    case DELETE_PRODUCT:
      return {
        ...state,
        cart: [...state.cart.filter(cart => cart !== action.payload)]
      }
    default:
      return state
  }
}

function toggleCart() {
  return {
    type: GET_STATUS
  }
}

function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

function delProduct(product) {
  return {
    type: DELETE_PRODUCT,
    payload: product
  }
}

export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const status = useSelector(appState => appState.cartState.open)

  const toggle = () => dispatch(toggleCart())
  const add = product => dispatch(addProduct(product))
  const del = product => dispatch(delProduct(product))

  const [total, setTotal] = useState("")

  useEffect(() => {
    const amount = cart.reduce((a, b) => Number(a) + Number(b.price), 0)

    setTotal(amount.toFixed(2))
  }, [cart])

  return { cart, status, toggle, add, del, total }
}

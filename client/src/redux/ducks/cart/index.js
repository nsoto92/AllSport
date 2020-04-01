// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_PRODUCT = "cart/ADD_PRODUCT"
const DEL_PRODUCT = "cart/DEL_PRODUCT"
const TOGGLE_CART = "cart/TOGGLE_CART"

// 3. initial state
const initialState = {
  cart: [],
  isOpen: false
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] }
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen }
    case DEL_PRODUCT:
      return {
        ...state,
        cart: [...state.cart.filter(product => product !== action.payload)]
      }
    default:
      return state
  }
}
// 5. action creators

function addProduct(product) {
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product
    })
  }
}

function delProduct(product) {
  return dispatch => {
    dispatch({
      type: DEL_PRODUCT,
      payload: product
    })
  }
}

function toggleCart() {
  return {
    type: TOGGLE_CART
  }
}

// 6. custom hook
export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const isOpen = useSelector(appState => appState.cartState.isOpen)
  const add = product => dispatch(addProduct(product))
  const del = product => dispatch(delProduct(product))
  const toggle = () => dispatch(toggleCart())
  // const total = cart.reduce((a, b) => a + b.price, 0).toFixed(2)

  useEffect(() => {
    console.log(cart)
  }, [])
  return { cart, add, isOpen, toggle, del }
}

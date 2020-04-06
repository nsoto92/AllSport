import React from "react"
import { useItems } from "../hooks"
import { useProducts } from "../hooks"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti"
import { FaSearch } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"
import "../styles/products.css"

export default (props) => {
  const { products } = useProducts()
  const { toggle, status, cart } = useItems()
  return (
    <div className="container-fluid p-0">
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/products">SHOP</Nav.Link>
            <Nav.Link href="/players">FIND A PRO</Nav.Link>
            <Nav.Link href="/aboutUs">ABOUT US</Nav.Link>
            <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <div className="navbar-nav">
          <li className="nav-item  rounded-circle mx-2 search-icon">
            <FaSearch />
          </li>
          <li className="nav-item  rounded-circle mx-2 basket-icon">
            <TiShoppingCart
              id='className={status ? "cartItems" : "cartItems closed"}'
              onClick={toggle}
              className={
                status
                  ? "nav-item  rounded-circle mx-2 basket-icon closed"
                  : "nav-item  rounded-circle mx-2 basket-icon"
              }
            />
          </li>
        </div>
      </Navbar>
    </div>
  )
}

import React from "react"
import { Link } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-12">
            <Dropdown className="btn-group">
              <Dropdown.Toggle
                className="btn border dropdown-toggle my-md-4 my-2 text-white"
                variant="red"
                // id="dropdown-basic"
              >
                Pros
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/playerProfiles">
                  Pro Sign In
                </Dropdown.Item>
                <Dropdown.Item href="/playerProfiles">
                  Pro Sign up
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="col-md-4 col-12 text-center">
          <Link className="nav-link" to="/">
            <h2 className="my-md-3 site-title text-white">All Sports</h2>
          </Link>
        </div>

        <div className="col-md-4 col-12 text-right">
          <p className="my-md-4 header-links">
            <Link to="#" className="px-2">
              Join Us
            </Link>
            <Link to="#" className="px-1">
              Log In{" "}
            </Link>
          </p>
        </div>
      </div>
    </header>
  )
}

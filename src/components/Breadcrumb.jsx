import React from 'react'
import { Link } from 'react-router-dom'
import './breadcrumb.scss'

function Breadcrumb(props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumb"
    >
      <ol>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact Us
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import Navigation from "./Navigation"
import MobileMenu from "./MobileMenu"

const Header = ({ siteTitle, author, bio, contacts}) => {
  return(
    <header className="head-main"
      style={{
        background: `#2d3748`,
        marginBottom: `1rem`,
      }}
    >
      <div className="head-elements"
        style={{
          margin: `0`,
          padding: `.75rem`,
        }}
      >
        <h1 className="head-logo">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Navigation />
      </div>
      <MobileMenu />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

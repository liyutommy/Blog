/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"

import Header from "./header/Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query layoutQuery {
      site {
        siteMetadata {
          title
          author
          contacts {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main className="p-4">{children}</main>
        <footer className="text-center">
          <hr/>
          <p className="d-inline">
            © {new Date().getFullYear()} Yu Li Built with
            {` `}
            <a className="text-info" href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import { graphql, Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar/Sidebar"

const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges

  return (  
    <Layout>
      <SEO title="Home" />
      <div className="index-main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="blog">
          {posts.map((post) => {
            return (
              <div key={post.node.fields.slug} className="container mt-3">
                <Link to={post.node.fields.slug} className="text-dark">
                  <h2 className="title"> 
                    {post.node.frontmatter.title}
                  </h2>
                </Link>
                <small className="d-block text-info">
                  <i> Posted on {post.node.frontmatter.date}</i>
                </small>
                <p className="d-inline">
                  {post.node.excerpt}
                </p>
                <Link to={post.node.fields.slug} className="text-primary">
                  <small className="d-inline-block ml-2">
                    Read full post
                  </small>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        bio
        contacts {
          github
          linkedin
          csdn
        }
      }
    }
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {published: {eq: true}}}, 
      limit: 4){
        totalCount
        edges {
          node {
            excerpt(pruneLength: 200)
            html
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              tags
            }
            fields {
              slug
            }
          }
        }
      }
  }
`

export default IndexPage

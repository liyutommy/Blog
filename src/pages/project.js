import React from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar/Sidebar"

const ProjectPage = ({data}) => {
    //const posts = data.allMarkdownRemark.edges
  
    return (  
      <Layout>
        <SEO title="Project" />
        <div className="index-main">
          <div className="sidebar px-4 py-2">
            <Sidebar />
          </div>
          <div className="blog">
            <h2 className="text-center">Empty</h2>
          </div>
        </div>
      </Layout>
    )
  }

export const pageQuery = graphql`
  query ProjectQuery {
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

export default ProjectPage
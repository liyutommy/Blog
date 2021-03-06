import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./sidebar.css"

import Bio from "./Bio"
import SocialLinks from "./SocialLinks"

const Sidebar = () => {
    const data = useStaticQuery(graphql`
        query sidebarQuery {
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
        }
    `)

    return (
        <>
            <div className="sidebar-main">
                <Bio author={data.site.siteMetadata.author} bio={data.site.siteMetadata.bio}/>
                <SocialLinks contacts={data.site.siteMetadata.contacts} />
            </div>
        </>
    )
}

export default Sidebar

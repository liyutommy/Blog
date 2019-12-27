import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import { FaRegCalendarCheck, FaRegCalendarTimes } from "react-icons/fa"

import Sidebar from "../components/sidebar/Sidebar"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="index-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>
                <div className="blog">
                    <SEO title="About" />
                    <div>
                        <h2>About</h2>
                        <p>My blog is built with React, GatsbyJS, and JavaScript. Later, I will use TypeScript to improve my blog. To be continued...</p>
                        <h3><u>Completed Features</u></h3>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaRegCalendarCheck size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-2 w-75 align-top">Blazing fast, as you'd expect from a Gatsby site</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="prism">
                                <FaRegCalendarCheck size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-2 w-75 align-top">Includes Prism for code block styling in markdown files</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="icons">
                                <FaRegCalendarCheck size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-2 w-75 align-top">Developer-relevant social-media icon links including GitHub, LinkedIn and CSDN</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="mobile">
                                <FaRegCalendarCheck size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-2 w-75 align-top">Mobile responsive, of course</p>
                        </div>
                        <h3><u>Incompleted Features</u></h3>
                        <div>
                            <span className="text-danger d-inline-block" title="tech tags">
                                <FaRegCalendarTimes size={26} style={{ color: "defeat" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Tech tags designed for web developers</p>
                        </div>
                        <div>
                            <span className="text-danger d-inline-block" title="course tags">
                                <FaRegCalendarTimes size={26} style={{ color: "defeat" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Related course tags of some articles</p>
                        </div>
                        <div>
                            <span className="text-danger d-inline-block" title="project">
                                <FaRegCalendarTimes size={26} style={{ color: "defeat" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Temporarily leave the project webpage blank </p>
                        </div>
                    </div>
                </div>
            </div>    
        </Layout>
    )
}

export default AboutPage
import React from "react"
import {
    FaHome,
    FaArchive,
    FaExclamationCircle
} from "react-icons/fa"
import { GoProject } from "react-icons/go"
import {Link} from "gatsby"
import "./header.css"

const Navigation = () => {
    return (
        <div className="icon float-right mr-5">
            <Link to="/" title="Home" className="text-light ml-5 icon-text">
                <FaHome size={40} style={{color: "light"}} />
                <span className="font-weight-bold">Home</span>
            </Link>
            <Link to="/archive" title="Archive" className="text-light ml-5 icon-text">
                <FaArchive size={40} style={{color: "light"}} />
                <span className="font-weight-bold">Archive</span>
            </Link>
            <Link to="/project" title="Project" className="text-light ml-5 icon-text">
                <GoProject size={40} style={{color: "light"}} />
                <span className="font-weight-bold">Project</span>
            </Link>
            <Link to="/about" title="About" className="text-light ml-5 icon-text">
                <FaExclamationCircle size={40} style={{color: "light"}} />
                <span className="font-weight-bold">About</span>
            </Link>
        </div>
    )
}

export default Navigation
import React from "react"
import {
    FaHome,
    FaArchive,
    FaExclamationCircle
} from "react-icons/fa"
import { GoProject } from "react-icons/go"
import {Link} from "gatsby"
import "./header.css"

const MobileMenu = () => {
    return(
        <div className="mobile-menu py-1 text-center">
            <div className="mobile-icon">
                <Link to="/" title="Home" className="text-light mobile-icon-text">
                    <FaHome size={30} style={{color: "light"}} />
                    <span className="font-weight-bold">Home</span>
                </Link>
                <Link to="/archive" title="Archive" className="text-light ml-5 mobile-icon-text">
                    <FaArchive size={30} style={{color: "light"}} />
                    <span className="font-weight-bold">Archive</span>
                </Link>
                <Link to="/project" title="Project" className="text-light ml-5 mobile-icon-text">
                    <GoProject size={30} style={{color: "light"}} />
                    <span className="font-weight-bold">Project</span>
                </Link>
                <Link to="/about" title="About" className="text-light ml-5 mobile-icon-text">
                    <FaExclamationCircle size={30} style={{color: "light"}} />
                    <span className="font-weight-bold">About</span>
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu
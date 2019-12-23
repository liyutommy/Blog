import React from "react"
import {
    FaHome,
    FaArchive,
    FaExclamationCircle
} from "react-icons/fa"
import { GoProject } from "react-icons/go"
import {Link} from "gatsby"

const HeaderJump = () => {
    return (
        <div>
            <Link to="/">
                <span title="Home" className="text-light ml-5">
                    <FaHome size={40} style={{color: "light"}} />
                </span>
            </Link>
            <Link to="/archive">
                <span title="Archive" className="text-light ml-5">
                    <FaArchive size={40} style={{color: "light"}} />
                </span>
            </Link>
            <Link to="/project">
                <span title="project" className="text-light ml-5">
                    <GoProject size={40} style={{color: "light"}} />
                </span>
            </Link>
            <Link to="/about">
                <span title="about" className="text-light ml-5">
                    <FaExclamationCircle size={40} style={{color: "light"}} />
                </span>
            </Link>
        </div>
    )
}

export default HeaderJump
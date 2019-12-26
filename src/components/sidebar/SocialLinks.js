import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
} from "react-icons/fa"
import "./sidebar.css"

const SocialLinks = ({contacts}) => {
    return (
        <div className="side-social-links mt-3 mb-3">
            <a className="text-secondary" href={contacts.linkedin}>
                <span title="LinkedIn">
                    <FaLinkedin size={26} style={{color: "secondary"}} className="brighten" />
                </span>
            </a>
            <a className="text-secondary" href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={26} style={{color: "secondary"}} className="brighten"/>
                </span>
            </a>
        </div>
    )
}

export default SocialLinks



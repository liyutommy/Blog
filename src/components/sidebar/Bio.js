import React from "react"
import "./sidebar.css"
import yuli from "../../images/yuli.jpg"

const Bio = ({author, bio}) => {
    return (
        <div>
            <img src={yuli} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 ml-3 author-bio">{author}</h3>
            <small className="text-muted">{bio}</small>
        </div>
    )
}

export default Bio
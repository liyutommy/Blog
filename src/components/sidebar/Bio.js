import React from "react"
import "./sidebar.css"

const Bio = ({author, bio}) => {
    return (
        <div className="w-75">
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{bio}</small>
        </div>
    )
}

export default Bio
import React from "react"

import "./header.css"
import yuli from "../../images/yuli.jpg"

const MobileSiderBar = (props) => {
    return (
        <div className="mobile-siderbar-main">
            <img src={yuli}  className="ml-4 mt-2" style={{ maxWidth: `75px`, maxHeight: `75px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
            <h4 >{props.author}</h4>
            <small className="text-muted">{props.bio}</small>
        </div>
    )
}

export default MobileSiderBar
import React from "react"
import "./MobileMenu.css"

const MobileMenu = () => {
    return(
        <div id="menuToggle">
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Info</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default MobileMenu
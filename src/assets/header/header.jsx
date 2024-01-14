import React from 'react'
import './header.css'
import rectangle from "../images/Rectangle.png"

function Card() {
    return(
         <>
        <div className="header">
            <div><img src={rectangle} className='rectangle' /></div>
        </div>
        </>
        )
}
export default Card

import React from 'react'
import { Link } from 'react-router-dom'

const Card4 = () => {
  return (
    <Link  to={"2" }className="card4-container link">
        <div className="card4-pic">
            <img src="/pictures/content.jpg" alt="" />
        </div>
        <div className="card4-content">
            <h6 className=''>music club</h6>
            <span>block j</span>
            <span>room 23</span>
        </div>
    </Link>
  )
}

export default Card4
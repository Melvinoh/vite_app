import React from 'react'
import { Link } from 'react-router-dom';

const Card2 = ({item2}) => {
  return (
    <Link to={item2.ClubsID} className="cd2-container link">
        <div className="cd2-pic">
            <img src={`/pictures/${item2.profile_pic}`} alt=""/>
        </div>
        <div className="cd2-content">
            <h6>{item2.name}</h6>
            <p>
               {item2.description}
            </p>
            <div>
                <h6>block : {item2.block}</h6>
                <h6>room : {item2.room}</h6>
            </div>
        </div>
    </Link>
  )
}

export default Card2
import React from 'react'
//import ClubsCard from '../../components/cards/ClubsCard'
import Myclubs from '../../components/cards/Myclubs'
//import cdata from"../../data/clubs.json"
import "./clubs.css";

function Clubs() {
  return (
    <div className="clubs-wrapper">
      <div className="heading">
        <span> clubs and society</span>
      </div>
      <div className="clubs_container">
        <Myclubs/>
      </div>

    </div>
    
  )
}

export default Clubs
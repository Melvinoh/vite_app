import React from 'react'
import ClubsCard from '../../components/cards/ClubsCard'
import cdata from"../../data/clubs.json"
import "./clubs.css";

function Clubs() {
  return (
    <div className="clubs-wrapper">
      <div className="heading">
        <span> clubs and society</span>
      </div>
      <div className="clubs_container grid">
      {cdata.map((cdata)=>(
        <ClubsCard cards={cdata} key={cdata.id}/>
      ))}
    </div>

    </div>
    
  )
}

export default Clubs
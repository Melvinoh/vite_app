import React from 'react'
import "./clubs.css"
import ClubsCard from '../../components/cards/ClubsCard'
import cdata from"../../data/clubs.json"
function Clubs() {

  return (
    <div className="clubs_container grid">
        {cdata.map((cdata)=>(
          <ClubsCard cards={cdata} key={cdata.id}/>
        ))}
    </div>
  )
}

export default Clubs

import ClubsCard from "../../components/cards/ClubsCard"
import sportdata from "../../data/sports.json"
import "./sports.css";

function Sports() {
  return (
    <div className="sports_container grid" >
    {
      sportdata.map(data => (
        <ClubsCard cards={data} key={data.id}/>
      ))
    }
    </div>
  )
}

export default Sports

import Card3 from "../../components/cards/Card3";
import sportdata from "../../data/sports.json"
import "./sports.css";

function Sports() {
  return (
    <div className="wrapper-con">
      <div className="sports-wrapper">
        <div className="heading1">
          <span>sports & culture</span>
        </div>
        <div className="sports_container grid" >
          {
            sportdata.map(data =>(
              <Card3 cards={data} key={data.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sports

import Card3 from "../../components/cards/Card3";
import sportdata from "../../data/sports.json"
import "./sports.css";
import {  useQueries, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from "../../../axios";
import { AuthContext } from '../../context/AuthContext'
import { useContext } from "react";

function Sports() {

  const {currentUser} = useContext(AuthContext)
  const regno = {regno:currentUser.regno};

  const queryClient = useQueryClient()

  const[Sports,Mysports]= useQueries({
    queries:[
      {
        queryKey:['sports'],
        queryFn: ()=>makeRequest.get("/sports/getSports").then((res)=>res.data)
      },
      {
        queryKey : ['my_sports'],
        queryFn : () => makeRequest.post("/sports/Mysports",regno).then((res)=>res.data)
      }

    ],
    queryClient
    
  })

  if(Sports.isLoading || Mysports.isLoading) return <div> loading ...</div>
  if(Sports.isError || Mysports.error) return <div> { Mysports.error.message.data} </div>
  if(!Mysports.data) return <div>"your are not a member of any sports yet kindly view the options below</div>


  console.log(Sports.data)
  console.log(Mysports.data)


  return (
    <div className="wrapper-con">
      <div className="sports-wrapper">
        <div className="heading1">
          <span>sports & culture</span>
        </div>
        <div className="heading3">my sports </div>

        <div className="sports_container grid" >
          {
            Mysports.data?.map(data =>(
              <Card3 cards={data} key={data.SportsID}/>
            ))
          }
        </div>
        <div className="heading3"> related sports </div>
        <div className="sports_container grid" >
          {
            Sports.data?.map(data =>(
              <Card3 cards={data} key={data.SportsID}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sports
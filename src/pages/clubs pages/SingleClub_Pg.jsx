import React, { useState, useEffect} from 'react'
import Members from '../../components/clubs & sports components/Members'
import Non_members from '../../components/clubs & sports components/Non_members'
import { useContext } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
const Club_details = () => {
  const queryClient = useQueryClient();
  const {id} = useParams();

 
  const myclubs = queryClient.getQueryData(['myclubs']);
  console.log(myclubs)
  const [Myclubs, setMyclubs] = useState(myclubs || JSON.parse(localStorage.getItem("myclub")))
  
  useEffect(()=>{
      if (myclubs){
       localStorage.setItem("myclub", JSON.stringify(Myclubs));
      } 
   },[Myclubs]);
  
  
  console.log(Myclubs.length);
  for (let i = 0; i < Myclubs.length; i++) {
    if(Myclubs[i].ClubsID  == id ){
      var clubMember = Myclubs[i].ClubsID;
    }
  }

  const {isLoading , data , error} = useQuery(["singleclubs"], async () =>{
    const response = await axios.get(`http://localhost:8800/api/clubs/getClubsID/${id}`);
    return response.data;
  });
  if (isLoading) return <div> loading ... </div>
  if (error) return <div>{error}</div>
  if(clubMember){
    return (
      <div className='wrapper-con'>
         <Members key={data.id} items={data} id={id}/>
      </div>
    )
  }

  return (
  <div className='wrapper-con'>
    <Non_members key={data.id} items={data}/>
  </div>
  )
}
export default Club_details
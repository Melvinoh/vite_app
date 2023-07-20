import React from 'react'
import Members from '../../components/clubs & sports components/Members'
import Non_members from '../../components/clubs & sports components/Non_members'
import { useContext } from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Club_details = () => {
  const {id} = useParams();

  const {isLoading , data , error} = useQuery(["myClubs"], async () =>{
    const response = await axios.get(`http://localhost:8800/api/clubs/getClubsID/${id}`);
    return response.data;
  });
  if (isLoading) return <div> loading ...</div>
  if (error) return <div>{error}</div>


  return (
  <div className='wrapper-con'>
    <Non_members key={data.id} items={data}/>
  </div>
  )
}
export default Club_details
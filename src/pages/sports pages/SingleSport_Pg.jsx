import React  ,{ useState, useEffect}  from 'react'
import Members from '../../components/clubs & sports components/Members'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Non_members from '../../components/clubs & sports components/Non_members'
import axios from 'axios'

const Sport = () => {

  const queryClient = useQueryClient();
  const {id} = useParams();
  console.log(id)

 
  const mySports = queryClient.getQueryData(['my_sports']);
  const [Mysport, setMysport] = useState(mySports || JSON.parse(localStorage.getItem("mysport")))
  
  useEffect(()=>{
    if (mySports){
      localStorage.setItem("mysport", JSON.stringify(Mysport));
    } 
  },[Mysport]);

  if (Mysport && Array.isArray(Mysport)) {
    console.log(Mysport.length);
  
    for (let i = 0; i < Mysport.length; i++) {
      if (Mysport[i].SportsID == id) {
        var sportMember = Mysport[i].SportsID;
      }
    }
  }

  const {isLoading , data , error} = useQuery(["singleSports"], async () =>{
    const response = await axios.get(`http://localhost:8800/api/sports/getSportID/${id}`);
    return response.data;
  });
  if (isLoading) return <div> loading ... </div>
  if (error) return <div>{error.message}</div>
  console.log(data)

  return (
    <>
      {
        sportMember ? (
          <div className='wrapper-con'>
            <Members key={data.id} items={data} id={id}/>
          </div>
        ):
        (
          <div className='wrapper-con'>
            <Non_members key={data.id} items={data}/>
          </div>
        )
      }
    </>
   
  
  )

 
 
}
export default Sport
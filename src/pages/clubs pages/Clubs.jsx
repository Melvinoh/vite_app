import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import sportdata from "../../data/sports.json"
import clubsData from "../../data/clubs.json"
import Card1 from '../../components/cards/Card1'
import Card2 from '../../components/cards/Card2'
import Card3 from '../../components/cards/Card3'
import LeadersCard from '../../components/cards/LeadersCard'
import "./clubs.css"
import { AuthContext } from '../../context/AuthContext'
import { useQuery, useQueries } from '@tanstack/react-query'
import { makeRequest } from '../../../axios'

const Clubs =  () => {  
    const{isloading, error, data} = useQuery(['clubs'], async () =>{

        const response = await makeRequest.get('/getClubs');

        return response.data
        
    });
    if(isloading) return <div>loading...</div>

    if (error) {
        return <div> {error.message}</div>
    }
    if(!data) return <div> loading ... </div>

    
    // const [clubs, myclubs] = useQueries([
    //     { queryKey:['clubs'], queryFn:()=>makeRequest.get('/getClubs').then((res)=> res.data)},
    //     { queryKey:['myclubs'], queryFn:()=>makeRequest.post('/myclubs').then((res)=> res.data)}
    // ]);
    // if(clubs.isLoading ||myclubs.isLoading ) return <div>loading ...</div>
    // if(clubs.error ||myclubs.error ) return <div>Error :{clubs.error?.message || myclubs.error?.message }</div>
    // if(!clubs || !myclubs) return <div>loading ...</div>

    // const [clubsQuery, myClubsQuery] = useQueries([
    //     { queryKey: ['clubs'], queryFn: () => makeRequest.get('/getClubs').then((response) => response.data) },
    //     { queryKey: ['myclubs'], queryFn: () => makeRequest.get('/myclubs').then((response) => response.data) },
    //   ]);
    
    //   if (clubsQuery.isLoading || myClubsQuery.isLoading) return <div>Loading...</div>;
    
    //   if (clubsQuery.error || myClubsQuery.error) {
    //     return <div>Error: {clubsQuery.error?.message || myClubsQuery.error?.message}</div>;
    //   }
    
    //   const allClubsData = clubsQuery.data || [];
    //   const myClubsData = myClubsQuery.data || [];

    
  return (
    <div className='wrapper-con'>
        <div className="clubs-wrapper">
            <div className="heading1">
                <span> clubs and society</span>
            </div>
            <div className="clubs_container">
                <div className='clubs-box'>
                    <div className="card4-box">
                    <span className='heading2'> my clubs</span>
                    <div className="card4-wrapper grid">
                        {
                            data.map(Data =>(<LeadersCard key={Data.ClubsID} item={Data}/>))
                        }
                    </div>
                    </div>
                    <div className="card2-box">
                    <div className="ft">
                        <span className='heading2'>featured clubs</span>
                    </div>
                    <div className="cd2-wrapper">
                        {
                            data.map(data =>(<Card2 key={data.ClubsID} item2={data}/>))
                        }
                    </div>
                    </div>
                    <div className="card1-box">
                    <div className='heading2'>
                        <span>recomended clubs</span>
                    </div>
                    <div className="cd1-wrapper">
                        {
                            data.map(data =>(<Card1 key={data.ClubsID} item2={data}/>))
                        }
                           
                    </div>
                    </div> 
                    <div className="card3-box">
                        <div className="heading2">
                            <span>Clubs by categories</span>
                        </div>
                        <div className="cd3">
                            <div className='heading3'>
                                <span >academics</span>
                            </div>
                            <div className="cd3-wrapper grid">
                                {
                                    data.map(data =>(
                                        <Card3 cards={data} key={data.ClubsID}/>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="cd3">
                            <div className='heading3'>
                                <span >services</span>
                            </div>
                            <div className="cd3-wrapper grid">
                                {
                                    data.map(data =>(
                                        <Card3 cards={data} key={data.ClubsID}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="cd3">
                            <div className='heading3'>
                                <span >artistic</span>
                            </div>
                            <div className="cd3-wrapper grid">
                                {
                                    data.map(data =>(
                                        <Card3 cards={data} key={data.ClubsID}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Clubs
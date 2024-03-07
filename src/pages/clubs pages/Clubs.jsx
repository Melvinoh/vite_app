import React, { useContext ,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import sportdata from "../../data/sports.json"
import clubsData from "../../data/clubs.json"
import Card1 from '../../components/cards/Card1'
import Card2 from '../../components/cards/Card2'
import Card3 from '../../components/cards/Card3'
import Card4 from '../../components/cards/Card4'

import LeadersCard from '../../components/cards/LeadersCard'
import "./clubs.css"
import { AuthContext } from '../../context/AuthContext'
import {  useQueries, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../../axios';




const Clubs =  () => { 
  

    const queryClient = useQueryClient();
    const {currentUser} = useContext(AuthContext)

    const regno = {regno:currentUser.regno};
    const [ clubsQuery, myClubsQuery] = useQueries({
        queries:[
            {
                queryKey:['clubs'],
                queryFn: () => makeRequest.get("/clubs/getClubs").then((res)=> res.data)
            },
            {
                queryKey:['myclubs'],
                queryFn: () => makeRequest.post("/clubs/myclubs",regno).then((res)=> res.data)
            },
        ],
        queryClient,
    });

    if(clubsQuery.isLoading || myClubsQuery.isLoading) return <div>loading ...</div> 
    if(clubsQuery.error|| myClubsQuery.error) return <div>{ myClubsQuery.error.message.data}</div> 
    if(!myClubsQuery) return <div>you are not a member of any clubs yet </div>

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
                        <div className="card4-wrapper ">
                            {
                                Array.isArray(myClubsQuery.data) ? (myClubsQuery.data.map( (data) => <Card4 key={data.ClubID} item={data} /> )) : (<div>{myClubsQuery.data}</div>)
                            }
                        </div>
                    </div>
                    <div className="card2-box">
                        <div className="ft">
                            <span className='heading2'>featured clubs</span>
                        </div>
                        <div className="cd2-wrapper">
                            {
                                clubsQuery.data?.slice(6).map(data =>(<Card2 key={data.ClubsID} item2={data}/>))
                            }
                        </div>
                    </div>
                    <div className="card1-box">
                        <div className='heading2'>
                            <span>recomended clubs</span>
                        </div>
                        <div className="cd1-wrapper">
                            {
                                clubsQuery.data?.map(data =>(<Card1 key={data.ClubsID} item2={data}/>))
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
                                    clubsQuery.data?.map(data =>(
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
                                    clubsQuery.data?.map(data =>(
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
                                    clubsQuery.data?.map(data =>(
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
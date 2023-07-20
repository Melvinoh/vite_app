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
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../../axios'

const Clubs =  () => {  
    const {getClubs, ClubsContent} = useContext(AuthContext);
    


    const{isloading, error, data} = useQuery(['clubs'], async () =>{

        const response = await makeRequest.get('/getClubs');

        return response.data
        
    });
    if(isloading) return <div>loading...</div>

    if (error) {
        return <div> {error.message}</div>
    }
    if(!data) return <div> loading ... </div>


    
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
                            data.map(Data =>(<LeadersCard key={Data.clubsID} item={Data}/>))
                        }
                    </div>
                    </div>
                    <div className="card2-box">
                    <div className="ft">
                        <span className='heading2'>featured clubs</span>
                    </div>
                    <div className="cd2-wrapper">
                        {
                            data.map(data =>(<Card2 key={data.id} item2={data}/>))
                        }
                    </div>
                    </div>
                    <div className="card1-box">
                    <div className='heading2'>
                        <span>recomended clubs</span>
                    </div>
                    <div className="cd1-wrapper">
                        {
                            data.map(data =>(<Card1 key={data.id} item2={data}/>))
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
                                        <Card3 cards={data} key={data.id}/>
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
                                        <Card3 cards={data} key={data.id}/>
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
                                        <Card3 cards={data} key={data.id}/>
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
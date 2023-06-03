import React from 'react'
import { Link } from 'react-router-dom'
import sportdata from "../../data/sports.json"
import Card1 from '../../components/cards/Card1'
import Card2 from '../../components/cards/Card2'
import Card3 from '../../components/cards/Card3'
import Card4 from '../../components/cards/Card4'

function Clubs() {
  return (
    <div className="clubs-wrapper">
      <div className="heading">
        <span> clubs and society</span>
      </div>
      <div className="clubs_container">
        <div className='clubs-box'>
          <div className="card4-box">
              <span className='sub-heading'> my clubs</span>
              <div className="card4-wrapper">
                  <Card4/>
                  <Card4/>
                  <Card4/>
                  <Card4/>
                  <Card4/>
                  <Card4/>
              </div>
          </div>
          <div className="card2-box">
              <div className="ft">
                  <span className='sub-heading'>featured clubs</span>
              </div>
              <div className="cd2-wrapper">
                  <Card2/>
                  <Card2/>
                  <Card2/>
                  <Card2/>
              </div>
          </div>
          <div className="card1-box">
              <div className='sub-heading'>
                  <span>recomended clubs</span>
              </div>
              <div className="cd1-wrapper">
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
                    <Card1/>
              </div>
          </div> 
          <div className="card3-box">
            <div className="sub-heading">
                <span>Clubs by categories</span>
            </div>
            <div className="cd3">
                <div className='heading'>
                    <span >academics</span>
                </div>
                <div className="cd3-wrapper grid">
                    {
                        sportdata.map(data =>(
                            <Card3 cards={data} key={data.id}/>
                        ))
                    }

                </div>
            </div>
            <div className="cd3">
                <div className='heading'>
                    <span >services</span>
                </div>
                <div className="cd3-wrapper grid">
                    {
                        sportdata.map(data =>(
                            <Card3 cards={data} key={data.id}/>
                        ))
                    }
                </div>
            </div>
            <div className="cd3">
                <div className='heading'>
                    <span >artistic</span>
                </div>
                <div className="cd3-wrapper grid">
                    {
                        sportdata.map(data =>(
                            <Card3 cards={data} key={data.id}/>
                        ))
                    }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Clubs
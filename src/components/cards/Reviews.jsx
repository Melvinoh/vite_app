import React from 'react'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
const Reviews = () => {
  return (
    <div className="rev-container">
        <img src="/pictures/rasterman.jpg" alt="" />
        <div className="revcontent">
            <RiDoubleQuotesL/>
            <p>
                A design concept is what you need when time crunch doesn't allow for a complete process. 
                This is where Conceptzilla comes in handy. 
                We design up to four main screens of your product, ready for public display.Fixed price. One week.
            </p>
            <RiDoubleQuotesR/>
        </div>
    </div>
  )
}

export default Reviews
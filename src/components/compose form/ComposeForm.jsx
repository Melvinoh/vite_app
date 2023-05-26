import React from 'react'
import "./compose.css"

const ComposeForm = () => {
  return (
   <div className="compose">
    <div className="c-heading">
        <h5>writing a post to : foot ball club</h5>
        <img src="/pictures/content.jpg" alt="img" />
    </div>
    <div className="c-form">
        <form action="">
            <input type="hidden" name="" value="muturi melvin"/>
            <input type="hidden" name="" value="reg number"/>
            <input type="hidden" name="" value="reg number"/>
            <div className="c-in">
                <label for="image"> image :</label>
                <input type="file"  name="image"/>
            </div>
            <div className="c-in">
                <label for="heading"> heading :</label>
                <input type="text"  name="image"/>
            </div>
            <div className="c-in">
                <label for="image">message :</label>
                <textarea name="message" rows="15 " columns="30"  placeholder='your text'/>
            </div>
        </form>
    </div>
   </div>
  )
}

export default ComposeForm
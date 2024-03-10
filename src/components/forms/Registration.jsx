import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Registration = () => {
  
  const id = useLocation().pathname.split("/")[2]
  const activity = useLocation().pathname.split("/")[1]
  console.log(activity)
  const [Regno, setRegno] = useState({
    id :`${id}`,
    regno:""
  });
  
  const [Error, setError] = useState(null);
  const [Response, setResponse] = useState(null);

  

  console.log(id);
  console.log(Regno);
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    if (activity === "sports") {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8800/api/sports/sportsReg",Regno);
        setResponse(response.data)

      } catch (error) {
        setError(error.response.data); 
       
      }
       if(!Error){
        navigate("/sports/"); 
      }
      setRegno({});

    }
    
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8800/api/clubs/clubreg",Regno);
        setResponse(response.data)

      } catch (error) {
        setError(error.response.data); 
       
      }
      console.log(Error)
      
      if(!Error){
        navigate("/clubs/"); 
      }
      setRegno({});
      console.log(Regno)
      
  } 
    
  const handleInputs = (e) =>{
    setRegno( (prev) => ({...prev, [e.target.name]:e.target.value}) )

  }


  return (
    <div className="regform-wrapper">
        <span className='heading2'>registration form</span>
        <div className="inputs">
          <label htmlFor="fname"> first name</label>
          <input type="text" name='fname' />
        </div>
        <div className="inputs">
          <label htmlFor="sname"> Second name</label>
          <input type="text" name='sname' />
        </div>
        <div className="inputs">
          <label htmlFor="adm "> ADM no</label>
          <input type="text" name='regno' onChange={handleInputs} />
        </div>
        <div className="inputs">
          <label htmlFor="school"> school</label>
          <input type="text" name='school' />
        </div>
        <div className="inputs">
          <label htmlFor="course"> course name</label>
          <input type="text" name='course' />
        </div>
        <div className="inputs">
          <input type="hidden" name="clubid" value={id} onChange={handleInputs}/>
        </div>
        {Error && Error}
        {Response && Response}
        <button className='btn' onClick={handleSubmit}>submit</button>
  </div>
  )
}

export default Registration
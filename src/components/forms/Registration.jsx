import React from 'react'

const Registration = () => {
  return (
    <div className="regform-wrapper">
        <span className='sub-heading'>registration form</span>
        <div className="inputs">
          <label htmlFor="fname"> first name</label>
          <input type="text" name='fname' />
        </div>
        <div className="inputs">
          <label htmlFor="sname"> Second name</label>
          <input type="text" name='fname' />
        </div>
        <div className="inputs">
          <label htmlFor="adm "> ADM no</label>
          <input type="text" name='fname' />
        </div>
        <div className="inputs">
          <label htmlFor="school"> school</label>
          <input type="text" name='fname' />
        </div>
        <div className="inputs">
          <label htmlFor="course"> course name</label>
          <input type="text" name='fname' />
        </div>
        <button className='btn'>submit</button>
  </div>
  )
}

export default Registration
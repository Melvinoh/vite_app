import React from 'react'
import {useState} from 'react'

const courcess = ({data,fun}) => {
  const [ActiveTab, setActiveTab] = useState(1)
  return (
    <div className="sh-tab_container">
        <div className={`sh-tab_heading ${ActiveTab === data.id ? 'active' : ''}`} onClick={()=>setActiveTab(data.id)}>
            <span>{data.course}</span>
        </div>
        <div className="sh-tab_content" key={data.id} onClick={fun}>
            {/* <span className={`item `}>{data[ActiveTab].names[0]}</span>
            <span className={`item `}>{data[ActiveTab].names[1]}</span>
            <span className={`item `}>{data[ActiveTab].names[2]}</span>
            <span className={`item `}>{data[ActiveTab].names[3]}</span>
            <span className={`item `}>{data[ActiveTab].names[4]}</span> */}
            {/* <span className={`item `}>{data[1].course}</span> */}
        </div>
    </div>    
  )
}

export default courcess
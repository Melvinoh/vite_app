import './header.css'
//imports for icons
import { TbBellRinging2Filled } from 'react-icons/tb'
import {MdMessage} from "react-icons/md"
import {FaBars} from "react-icons/fa"
import {BsPersonFill} from "react-icons/bs";
import NoticeModal from '../notifications/NoticeModal';
//link router & state
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = (props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open);
    }

    const [ProfilePop, setProfilePop] = useState(false)
  return ( 
    <div className='head-wrap'>
        <header className='container'>
            <div className="logo">
                <h5 className="title">
                    SATUK
                </h5>
                <span className="name">
                    student association of TUK
                </span>
            </div>
            <div className="icons_container">
                <FaBars className={`icons  bars ${props.isactive ? "active" : ""}`}id='bar' onClick={props.openNavfun} />
                <TbBellRinging2Filled className={`icons  bars ${props.isactive ? "active" : ""}`} onClick={handleOpen}/>
                <MdMessage className='icons'/>
                <BsPersonFill className={`icons  ${ProfilePop? "active" : ""}`}id='profile' onClick={()=>setProfilePop(!ProfilePop)} />
            </div>  
        </header>
        {ProfilePop && <div className="profile_popup">
            <div className="pop_items" onClick={props.openformfun}> student login </div>
            <div className="pop_items" onClick={props.openformfun} >admin login</div>
            <Link className="pop_items">  profile update</Link>
        </div>}
        {
            open && <NoticeModal/>
        }
      
    </div>
   
    
  
  )
}

export default Header
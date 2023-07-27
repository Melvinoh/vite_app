import "./navbar.css";
// imports for icons
import {VscHome} from 'react-icons/vsc';
import {MdOutlineSchool , MdSportsTennis , MdOutlineShoppingBasket}from "react-icons/md";
import {IoPeopleCircleOutline}from "react-icons/io5";
import {TfiGallery} from "react-icons/tfi";
import {BiLogOut} from "react-icons/bi";
import {BsSuitClub} from "react-icons/bs";
import { AuthContext } from '../../context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from "axios";
function Navbar(props) {
    const {currentUser, logout} = useContext(AuthContext);
    const [Err, setErr] = useState("");
    const navigate = useNavigate()

    const handleclick = async () =>{
      await logout();
      navigate("/satuk");
    }
  return (
    <div className={`nav_container ${(props.isOpen)? 'open' : ''}`} onClick={props.closefun} >
        <div className="nav-wrapper">
            <div className="navbar">
                
                <Link to= "/" className="nav_item active">
                    <VscHome className='nav_icons'/>
                    <span>home</span>
                </Link>
                

                <Link to= "schools" className="nav_item ">
                    <MdOutlineSchool className='nav_icons'/>
                    <span>schools</span>
                </Link>
                <Link to= "clubs" className="nav_item">
                    <BsSuitClub className='nav_icons'/>
                    <span>clubs</span>
                </Link>
                <Link  to= "sports" className="nav_item">
                    <MdSportsTennis className='nav_icons'/>
                    <span>sports</span>
                </Link>
                <Link  to= "tuk_soko" className="nav_item">
                    <MdOutlineShoppingBasket className='nav_icons'/>
                    <span>tuk soko</span>
                </Link>
                <Link to= "leadership" className="nav_item">
                    <IoPeopleCircleOutline className='nav_icons'/>
                    <span>leadership</span>
                </Link>
                
                <Link to= "gallery" className="nav_item">
                    <TfiGallery className='nav_icons'/>
                    <span>gallery</span>
                </Link>
            </div>
            <div className="navbar">
                <Link to ="profile" className="nav_item" >   
                    <img src={`/pictures/${currentUser.profile_pic}`}alt="profile"className="navpic"/>              
                    <span>profile</span>
                </Link>
                <div to= "" className="nav_item" onClick={handleclick}>
                    <BiLogOut className='nav_icons'/>
                    <span>log out</span>
                </div>
            </div>
        </div>
        
    </div>   
  )
}
export default Navbar
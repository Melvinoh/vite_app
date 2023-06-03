import "./navbar.css";
// imports for icons
import {VscHome} from 'react-icons/vsc';
import {MdOutlineSchool , MdSportsTennis , MdOutlineShoppingBasket}from "react-icons/md";
import {IoPeopleCircleOutline}from "react-icons/io5";
import {GrGallery} from "react-icons/gr";
import {BsSuitClub} from "react-icons/bs";
//link router
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className={`nav_container ${(props.isOpen)? 'open' : ''}`} onClick={props.closefun} >
        <div className="navbar">
            <Link to= "home" className="nav_item">
                <VscHome className='nav_icons'/>
                <span>home</span>
            </Link>
            <Link to= "schools" className="nav_item">
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
                <GrGallery className='nav_icons'/>
                <span>gallery</span>
            </Link>
        </div>
    </div>   
  )
}
export default Navbar
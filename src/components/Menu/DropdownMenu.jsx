import React, { useRef } from "react";
 
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { FaCog } from 'react-icons/fa';
import "./DropdownMenu.css";
import {  removeAuth } from '../../api/verifyToken'

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const clicklogout=()=>{
    console.log("logout de session")
    removeAuth(); 
    window.location.reload();  
  }
  
  return (
    <div className="menu-container">
      
    { <FaCog size="25" onClick={onClick}   style={{color:'yellow',marginLeft:'3px'}}/> }
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          
          <li onClick={clicklogout}><a href="#">Logout</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownMenu;
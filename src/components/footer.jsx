import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    
    <nav className="header d-flex justify-content-between mt-4" >
       <div className=" bd-highlight">
        <img className="logo" src={require('./../logo.png')}/>
        </div>
        <div className="p-1 d-flex flex-row bd-highlight ">
         <div className=" p-1 bd-highlight">Home</div>
         <div className=" p-1 bd-highlight">Past Webinars</div>
         <div className="p-1 bd-highlight">
        <a href="facebook.com">
        <FontAwesomeIcon 
        icon ={faFacebook}
        color="white" size="lg"/></a></div>
         <div class="p-1 bd-highlight">
         <a href="instagram.com">
        <FontAwesomeIcon icon={faInstagram} color="white" size="lg"/></a></div>
        </div>
       </nav>
);
}

export default Footer;
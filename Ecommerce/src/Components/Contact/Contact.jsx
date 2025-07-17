import React, { useContext } from 'react'
import './Contact.css'
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { shopContext } from '../ShopContext/ShopContext';
const Contact = () => {
    const {onClickInfoCross} =useContext(shopContext);
  return (
    <div className='contactCard'>
        <div className="content">
            <div className="nameCard">
            <button className="close-btn" onClick={()=>onClickInfoCross()}>x</button>

           
            <div className="name">
            <IoPerson />
               <p>  Tayyab Tahir</p>
              
            </div>
            </div>
            <div className="email">
            <MdEmail />
                tayyabtahir0607@gmail.com
            </div>
            <div className="number">
            <FaPhoneAlt />
                033111112223342
            </div>
        </div>
    </div>
  )
}

export default Contact
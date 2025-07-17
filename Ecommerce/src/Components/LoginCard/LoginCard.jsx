import React, { useContext} from 'react';
import { shopContext } from '../ShopContext/ShopContext';
import "./LoginCard.css"

const LoginCard = () => {
    const{validLogin,showLoginCard}=useContext(shopContext)
    console.log("validLogin",validLogin,"showLoginCard",showLoginCard)
  return validLogin&&showLoginCard ? (
    <div className="message">
      Logged in successfully!
    </div>
  ) :  <div className="message1">
  Login failed!
</div>;
};

export default LoginCard;
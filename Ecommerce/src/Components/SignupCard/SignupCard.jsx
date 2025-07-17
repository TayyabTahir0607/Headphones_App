import React, { useContext, useEffect, useState } from 'react';
import './SignupCard.css';
import { shopContext } from '../ShopContext/ShopContext';

const SignupCard = () => {
const {showSignupCard,successfullySignup}=useContext(shopContext);
console.log("showSignupCard",showSignupCard,"successfullySignup",successfullySignup)
  return showSignupCard&&successfullySignup ? (
    <div className="message">
      Account Created!
    </div>
  ) :  <div className="message1">
  Email already exists!
</div>;
};

export default SignupCard;
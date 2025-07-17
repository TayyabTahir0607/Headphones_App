import React, { useContext, useEffect, useState } from 'react';
import './FlashMessage.css';
import { shopContext } from '../ShopContext/ShopContext';

const FlashMessage = () => {
const {show}=useContext(shopContext)
  return show ? (
    <div className="message">
      Item added to cart successfully!
    </div>
  ) : null;
};

export default FlashMessage;

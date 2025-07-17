import React, { useContext } from 'react'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { shopContext } from '../ShopContext/ShopContext';

const Navbar = () => {
  const { cartItems, onClickContact,toggleShowForm,currentUser,setCurrentUser,onClickTrash,onclickLogout} = useContext(shopContext)
  return (
    <div className='mainNav'>
      <div className='navBar'>
        <Link to='/'><h1>AudiX</h1></Link>
        <ul className='navItems'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/Products'>
          <li>Products</li>
          </Link>
          <Link to='#'>
            <li onClick={() => onClickContact()}>Contact</li>
          </Link>
        
        </ul>
        <div className='topRightNav'>
          <Link to='/Cart'>

            <div>
              <FaShoppingCart className='cartStyle' ></FaShoppingCart>
              <p className='cartQty'>{cartItems.length}</p>
            </div>
          </Link>
          <div>
          {currentUser==0?<div className='icon' onClick={()=>toggleShowForm()} style={{ cursor: 'pointer' }}>
            <FaUser />
            </div>:<button className='cartStyle' onClick={()=>(setCurrentUser(0),onclickLogout())}>Logout</button>}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React, { useContext } from 'react'
import './cart.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { shopContext } from '../../Components/ShopContext/ShopContext';
import imageMap from '../../assets/ImageMap';
const Cart = () => {
  const { cartItems, onClickTrash, subtotal, onClickRemove,onClickPlus,itemQty,onClickMinus} = useContext(shopContext)
  return (
    <div className='main_cart'>
      <div className="left_middle">
        <div className="left_cart">
          <div className="topContainer">
            <h1>Shopping Cart</h1>
            <h1>Items: {cartItems.length}</h1>
            <div className="trashContainer">
              <RiDeleteBinLine className='trash' onClick={() => onClickTrash()}></RiDeleteBinLine>
            </div>

          </div>
          <div className="middleContainer">
            <p>Product Description</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          {cartItems.map((item,index) => (


            <div className="itemsCard" key={item.id}>
              <div className="image">
                <img src={imageMap[ item.image]} alt="" />
                <RiDeleteBinLine
                  className='image_bin'
                  onClick={() => onClickRemove(item)}>
                </RiDeleteBinLine>
              </div>
              <div className="title">
                {item.title}
              </div>
              <div className="countContainer">
                <button onClick={()=>onClickMinus(item)}>
                  -
                </button>
                <div className="counting">
                  <p>{itemQty[index]}</p>
                </div>
                <button onClick={()=>onClickPlus(item)}>
                  +
                </button>
              </div>
              <div className="price">
                {`$${item.price}`}
              </div>
              <div className="totall">
              {`$${item.price*itemQty[index]}`}
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="right_cart">
        <h1>
          Cart Summart
        </h1>
        <div className="cart_detail">
          <div className="items">
            <p>Items:</p>
            <p>{cartItems.length}</p>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>{`$${subtotal}`}</p>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>{`$${subtotal}`}</p>
          </div>


        </div>
        <button className='button1'>
          Pay Now
        </button>
      </div>
    </div>
  )
}

export default Cart
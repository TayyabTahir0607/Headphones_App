import React, { useState } from 'react'
import { useContext } from 'react'
import './ProductDetails.css'
import FlashMessage from '../../Components/FlashMessage/FlasMessage'
import { shopContext } from '../../Components/ShopContext/ShopContext'

const AllProducts = () => {
   const { products,onClickCart,onClickAdd,onClickShowDetails,show} = useContext(shopContext)
      
  
      return (
      <>
          <div className="ProductList_interface">
              <h1> All the available products</h1>
              {products.map((product) => (
                  <div className="product_card" key={product.id}>
                      <div className="product_img" onClick={()=>onClickShowDetails(product)}>
                          <img src={product.image} alt="" />
                      </div>
                      <div className="product_title">
                          {product.title}
                      </div>
                      <div className="product_price">
                          {`$${product.price}`}
                      </div>
                      <div className="add_to_cart_btn" onClick={()=>{
                          onClickCart(product)
                          onClickAdd()
                          }} >
                          <button >Add to cart</button>
  
                      </div>
                  </div>
                 
              ))}
  
  
          </div>
          {show&&<FlashMessage></FlashMessage>}
          </>

      )
}

export default AllProducts
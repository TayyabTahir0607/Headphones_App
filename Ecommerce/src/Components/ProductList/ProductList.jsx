import React, { useState } from 'react'
import { useContext } from 'react'
import './ProductList.css'
import { shopContext } from '../ShopContext/ShopContext'
import imageMap from '../../assets/ImageMap'
const ProductList = () => {
    const { products,onClickCart,onClickAdd,onClickShowDetails} = useContext(shopContext)
    return (
        <div className="ProductList_interface">
            <h1> Products</h1>
            {products.length>0 && products.map((product) => (
                
                <div className="product_card" key={product.id}>
                    <div className="product_img" onClick={()=>onClickShowDetails(product)}>
                        <img src={imageMap[ product?.image]} alt="" />
                    </div>
                    <div className="product_title">
                        {product?.title}
                    </div>
                    <div className="product_price">
                        {`$${product.price}`}
                    </div>
                    <div className="add_to_cart_btn" onClick={()=>{
                        onClickCart(product)
                    
                        }} >
                        <button >Add to cart</button>

                    </div>
                </div>
            ))}


        </div>
    )
}

export default ProductList
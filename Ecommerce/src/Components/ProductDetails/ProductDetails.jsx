import React, { useContext } from 'react'
import './ProductDetails.css'
import { shopContext } from '../ShopContext/ShopContext'
import imageMap from '../../assets/ImageMap'
const ProductDeails = () => {
  const { seletedProduct, onClickCrossProdDetail,addMultipleItems,onClickAddMultipleItems,onClickSubMultipleItems,onClickAddMultiple,setProdDetails } = useContext(shopContext)
  return (
    <div className='productCard'>
      <div className="ProductImg">
        <img src={imageMap[ seletedProduct.image]} alt="" />
      </div>
      <div className="productDetails">
        <div className="crossButton" onClick={onClickCrossProdDetail}>
          <button>X</button>
        </div>

        <div className="prodItem">
          <p className="label">Title:</p>
          <p>{seletedProduct.title}</p>
        </div>

        <div className="prodItem">
          <p className="label">Price:</p>
          <p>${seletedProduct.price}</p>
        </div>

        <div className="prodItem">
          <p className="label">Category:</p>
          <p>{seletedProduct.category}</p>
        </div>

        <div className="prodItem description">
          <p className="label">Description:</p>
          <p>{seletedProduct.description}</p>
        </div>
        <div className="multipleItems">
          <div className="countContainer1">
            <button onClick={() => onClickSubMultipleItems()}>
              -
            </button>
            <div className="counting1">
              <p>{addMultipleItems}</p>
            </div>
            <button onClick={() => onClickAddMultipleItems()}>
              +
            </button>
          </div>
          <div className="addButton" onClick={()=>(onClickAddMultiple(seletedProduct),setProdDetails(false))}>
            <button>
              Add to Cart
            </button>
          </div>
        </div>

      </div>


    </div>

  )
}

export default ProductDeails
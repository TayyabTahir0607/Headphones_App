import { useContext } from 'react'
import './AllProducts.css'
import { shopContext } from '../../Components/ShopContext/ShopContext'
import ProductDeails from '../../Components/ProductDetails/ProductDetails'
import FlashMessage from '../../Components/FlashMessage/FlasMessage'
import imageMap from '../../assets/ImageMap'


const AllProducts = () => {
   const { products,onClickCart,onClickAdd,onClickShowDetails,show,showProdDetails} = useContext(shopContext)
      
  
      return (
      <>
      {showProdDetails&&<ProductDeails></ProductDeails>}
      {show&&<FlashMessage></FlashMessage>}
          <div className={`ProductList_interface ${showProdDetails? "OpacitySet": ""}`}>
              <h1> All the available products</h1>
              {products.map((product) => (
                  <div className="product_card" key={product.id}>
                      <div className="product_img" onClick={()=>onClickShowDetails(product)}>
                          <img src={imageMap[ product.image]} alt="" />
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
          {/* {show&&<FlashMessage></FlashMessage>} */}
          </>

      )
}

export default AllProducts
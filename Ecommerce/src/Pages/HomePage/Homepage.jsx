import { useContext } from 'react'
import Hero from '../../Components/Hero/Hero'
import ProductDeails from '../../Components/ProductDetails/ProductDetails'
import ProductList from '../../Components/ProductList/ProductList'
import { shopContext } from '../../Components/ShopContext/ShopContext'
import FlashMessage from '../../Components/FlashMessage/FlasMessage'
import "./Homepage.css"
import InputForm from '../../Components/InputForm/InputForm'
import Signup from '../../Components/Signup/Signup'
import SignupCard from '../../Components/SignupCard/SignupCard'
import LoginCard from '../../Components/LoginCard/LoginCard'
import Logout from '../../Components/LogOutCard/Logout'

const Homepage = () => {
 const {showProdDetails,show,showForm,showSignup,showSignupCard,showLoginCard,showLogout}=useContext(shopContext)
  return (<>
  {showForm&&<InputForm></InputForm>}
  {!showForm&&showSignup&&<Signup></Signup>}
  { showProdDetails&&<ProductDeails></ProductDeails>}
    <div className={showProdDetails||showForm||showSignup? "opacitySet": ""} style={{ pointerEvents:showProdDetails||showForm ? "none" : "auto" }}>
    <Hero ></Hero>
    </div>
    {show&& <FlashMessage></FlashMessage>}
    {showLoginCard&&<LoginCard></LoginCard>}
    {showSignupCard&&<SignupCard></SignupCard>}
    {showLogout&&<Logout></Logout>}
    <div className={showProdDetails||showForm||showSignup? "opacitySet": ""} style={{ pointerEvents: showProdDetails||showForm ? "none" : "auto"}}>
    <ProductList></ProductList>
    </div>
    
    </>
  )
}

export default Homepage
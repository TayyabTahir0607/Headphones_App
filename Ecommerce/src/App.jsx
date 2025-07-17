import React, { useContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ShopContextProvider, { shopContext } from './Components/ShopContext/ShopContext'
import Contact from './Components/Contact/Contact'
import './App.css'

const App = () => {
  const {contactCard,} = useContext(shopContext);

  return (

    <div>
      <Navbar className={`${contactCard?('incOpacity' ):(' ')}`}></Navbar>
      {contactCard ? (<>
        <div className="topComp">
          <Contact></Contact>
        </div>
        <div className={`bottomComp ${contactCard?('incOpacity' ):(' ')}`}>
        <Outlet />
      </div>
        </>) : <div className="bottomComp">
        <Outlet />
      </div>}

      <Footer />
    </div>
  )
}

export default App;
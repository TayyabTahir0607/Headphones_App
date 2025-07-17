// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./Pages/HomePage/Homepage.jsx"
import ShopContextProvider from './Components/ShopContext/ShopContext.jsx'
import AllProducts from './Pages/AllProducts/AllProducts.jsx'
import Cart from './Pages/Cart/Cart.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element: <HomePage/>,
    },
  {
    path:'/Cart',
    element:<Cart></Cart>
  },
  {
    path:'/Products',
    element:<AllProducts/>
  }

]
}
])

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
<RouterProvider router={router}/>
</ShopContextProvider>

)

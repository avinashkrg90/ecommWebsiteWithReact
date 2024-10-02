import './App.css'
import Header from './Components/header/header'
import Navbar from './Components/Navbar/Navbar'
import SecondNavbar from './Components/SecondNavbar/SecondNavbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <SecondNavbar/>
        <Header/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory category="men"/>}/>
            <Route path='/womens' element={<ShopCategory category="women"/>}/>
            <Route path='/kids' element={<ShopCategory category="kids"/>}/>
            <Route path='product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

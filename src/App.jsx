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
import men_banner from './Components/Assets/banner_menImg.png'
import women_banner from './Components/Assets/banner_womanImg.png'
import kids_banner from './Components/Assets/banner_kidImg.png'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <SecondNavbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
            <Route path='product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App

import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { UserContext } from '../../context/UserContext'
import { toast } from 'react-toastify'


const Navbar = () => {

    const { getTotalCartItems } = useContext(ShopContext);
    const { loginState, setLoginState } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = () => {
        if (loginState) {
            setLoginState(false);
            toast.warning('You are logged out!', {position: "top-center", autoClose: 2000,});
        } else {
            navigate('/login');
        }
    }

    return (
        <>
            <div className={styles.navbar}>
                <Link to='/'>
                    <div className={styles.navLogo}>
                        <img src={logo} alt="logo" />
                        <p>BUSY BUY</p>
                    </div>
                </Link>

                <div className={styles.navLoginCart}>
                    {/* <Link to='/login'><button>{loginState?"Log out":"Login/Sign up"}</button></Link> */}
                    <button onClick={handleClick}>{loginState ? "Log out" : "Login/Sign up"}</button>
                    {/* <img src={cart_icon} alt="cart-icon" /> */}
                    <Link to='/cart'><i className="ri-shopping-cart-2-line" id={styles.cartIcon}></i></Link>
                    <div className={styles.navCartCount}>{getTotalCartItems()}</div>

                </div>
            </div>
        </>

    )
}

export default Navbar
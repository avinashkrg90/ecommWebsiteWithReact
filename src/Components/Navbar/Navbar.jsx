import React from 'react'
import styles from './Navbar.module.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <Link to='/'>
                <div className={styles.navLogo}>
                    <img src={logo} alt="logo" />
                    <p>BUSY BUY</p>
                </div>
            </Link>

            <div className={styles.navLoginCart}>
                <Link to='/login'><button>Login</button></Link>
                {/* <img src={cart_icon} alt="cart-icon" /> */}
                <Link to='/cart'><i className="ri-shopping-cart-2-line" id={styles.cartIcon}></i></Link>
                <div className={styles.navCartCount}>0</div>

            </div>
        </div>
    )
}

export default Navbar
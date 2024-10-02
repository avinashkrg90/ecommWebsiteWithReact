import React, { useState } from 'react'
import styles from './SecondNavbar.module.css'
import { Link } from 'react-router-dom';
const SecondNavbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <>
            <div className={styles.secondNavbar}>
                <ul className={styles.navMenu}>
                    <li onClick={()=>{setMenu("shop")}}> <Link to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
                </ul>
                <input type="text" className={styles.navSearch} placeholder='Search product here' />
            </div>
        </>
    )
}

export default SecondNavbar
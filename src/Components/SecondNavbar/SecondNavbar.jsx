import React, { useRef, useState } from 'react'
import styles from './SecondNavbar.module.css'
import { Link } from 'react-router-dom';
const SecondNavbar = () => {

    const [menu, setMenu] = useState("shop");
    const navRef = useRef();
    const menuRef = useRef();

    const handleBarClick = () => {
        navRef.current.classList.toggle(styles.navMenuVisible)
    }

    return (
        <>
            <div className={styles.secondNavbar}>
                <ul ref={navRef} className={styles.navMenu}>
                    <Link to='/'><li onClick={() => { setMenu("shop") }} className={menu==="shop"?styles.selected:""}>Shop{menu === "shop" ? <hr /> : <></>}</li></Link>
                    <Link to='/mens'><li onClick={() => { setMenu("mens") }} className={menu==="mens"?styles.selected:""}>Men{menu === "mens" ? <hr /> : <></>}</li></Link>
                    <Link to='/womens'><li onClick={() => { setMenu("womens") }} className={menu==="womens"?styles.selected:""}>Women{menu === "womens" ? <hr /> : <></>}</li></Link>
                    <Link to='/kids'><li onClick={() => { setMenu("kids") }} className={menu==="kids"?styles.selected:""}>Kids{menu === "kids" ? <hr /> : <></>}</li></Link>
                </ul>
                <input type="text" className={styles.navSearch} placeholder='Search product here' />
                <i onClick={handleBarClick} className="ri-bar-chart-horizontal-line"></i>
            </div>
        </>
    )
}

export default SecondNavbar
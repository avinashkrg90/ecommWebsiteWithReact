import React, { useState } from 'react'
import styles from './SecondNavbar.module.css'
import { Link } from 'react-router-dom';
const SecondNavbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <>
            <div className={styles.secondNavbar}>
                <ul className={styles.navMenu}>
                    <Link to='/'><li onClick={() => { setMenu("shop") }}>Shop{menu === "shop" ? <hr /> : <></>}</li></Link>
                    <Link to='/mens'><li onClick={() => { setMenu("mens") }}>Men{menu === "mens" ? <hr /> : <></>}</li></Link>
                    <Link to='/womens'><li onClick={() => { setMenu("womens") }}>Women{menu === "womens" ? <hr /> : <></>}</li></Link>
                    <Link to='/kids'><li onClick={() => { setMenu("kids") }}>Kids{menu === "kids" ? <hr /> : <></>}</li></Link>
                </ul>
                <input type="text" className={styles.navSearch} placeholder='Search product here' />
            </div>
        </>
    )
}

export default SecondNavbar
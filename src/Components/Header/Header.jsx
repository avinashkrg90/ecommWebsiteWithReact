import React from 'react'
import styles from './Header.module.css'
import hero_img from '../Assets/headerImageHero.png'
import trolleyImage from '../Assets/trolley.png'

const Header = () => {
  return (
    <div className={`${styles.header_wrapper} section`}>
        <div className={styles.headerImage}>
            <img src={hero_img} alt="Hero_image" />
        </div>
        <div className={styles.headerContent}>
            <h3>Explore Categories</h3>
            <h1>Enjoy Shopping <br/> Online</h1>
            <p>This season we have come up with new stylish trendy products at the best ever price with exciting offers...</p>
            <div className={styles.newArrivalContainer}>
                <p>Check new arrivals here </p>
                <button>{`New Arrivals >>`}</button>
            </div>
            
        </div>
        <div className={styles.headerImage2}>
            <img src={trolleyImage} alt="Hero_image" />
        </div>
    </div>
  )
}

export default Header
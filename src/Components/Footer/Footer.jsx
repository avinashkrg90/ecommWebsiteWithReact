import React from 'react'
import styles from './Footer.module.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerLogo}>
            <img src={footer_logo} alt="footerImg" />
            <p>BUSY BUY</p>
        </div>
        <ul className={styles.footerLinks}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className={styles.footerSocialIcon}>
            <div className={styles.footerIconsContainer}>
                <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className={styles.footerIconsContainer}>
                <img src={pinterest_icon} alt="Pinterest" />
            </div>
            <div className={styles.footerIconsContainer}>
                <img src={whatsapp_icon} alt="Whatsapp" />
            </div>
        </div>
        <div className={styles.footerCopyright}>
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
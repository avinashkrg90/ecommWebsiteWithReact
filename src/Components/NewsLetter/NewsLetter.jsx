import React from 'react'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.newsLetter}>
        <h1>Get Exclusive Offers on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
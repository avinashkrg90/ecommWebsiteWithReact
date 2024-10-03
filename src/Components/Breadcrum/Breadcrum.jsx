import React from 'react'
import styles from './Breadcrum.module.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;

    return (
        <div className={styles.breadcrum}>
            Home <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name} <img src={arrow_icon} alt="arrow" />
        </div>
    )
}

export default Breadcrum
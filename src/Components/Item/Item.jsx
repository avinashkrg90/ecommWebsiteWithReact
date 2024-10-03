import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, new_price, old_price}) => {
  return (
    <div className={styles.item}>
        <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt="item-iamge"/></Link>
        <p>{name}</p>
        <div className={styles.itemPrice}>
            <div className={styles.itemPriceNew}>
                {new_price}
            </div>
            <div className={styles.itemPriceOld}>
                {old_price}
            </div>
        </div>
    </div>
  )
}

export default Item
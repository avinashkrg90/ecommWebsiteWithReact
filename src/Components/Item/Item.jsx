import React from 'react'
import styles from './Item.module.css'

const Item = ({name, image, new_price, old_price}) => {
  return (
    <div className={styles.item}>
        <img src={image} alt="item-iamge"/>
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
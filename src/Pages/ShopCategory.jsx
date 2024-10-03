import React, { useContext } from 'react'
import styles from './CSS/ShopCategory.module.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  console.log("all products", all_product);
  return (
    <div className={styles.shopCategory}>
      <div className={styles.banner}>
          <img src={props.banner} alt="" />
          <div className={styles.texts}>
            <h1>FLAT 50% OFF</h1>
            <button>Explore now</button>
          </div>
      </div>
      <div className={styles.shopCategoryIndexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles.shopCategorySort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.shopCategoryProducts}>
        {all_product.map((item, i)=>{
            if(props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }else{
              return null;
            }
        })}
      </div>
      <div className={styles.shopCategoryLoadMore}>
        Explore more
      </div>
    </div>

  )
}

export default ShopCategory
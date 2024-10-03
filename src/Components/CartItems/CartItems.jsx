import React, { useContext } from 'react'
import styles from './CartItems.module.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className={styles.cartItems}>
            <div className={styles.cartItemsFormatMain}>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <>
                            <div className={`${styles.cartItemsFormat} ${styles.cartItemsFormatMain}`}>
                                <img src={e.image} alt="image" className={styles.productIcon} />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className={styles.cartItemsQuantity}>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className={styles.cartItemRemoveIcon} src={remove_icon} alt="" onClick={() => removeFromCart(e.id)} />
                            </div>
                            <hr />
                        </>
                    )
                }
                return null;
            })}
            <div className={styles.cartItemsDown}>
                <div className={styles.catItemsTotal}>
                    <h1>Cart Total</h1>
                    <div>
                        <div className={styles.cartItemsTotalItems}>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className={styles.cartItemsTotalItems}>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className={styles.cartItemsTotalItems}>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className={styles.cartItemsPromocode}>
                    <p>If you have a promo code, enter it here</p>
                    <div className={styles.cartItemsPromoBox}>
                        <input type="text"  placeholder='Promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
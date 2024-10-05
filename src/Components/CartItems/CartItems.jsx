import React, { useContext, useState } from 'react'
import styles from './CartItems.module.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const { all_product, cartItems, addToCart, removeFromCart, removeAllFromCart, getTotalCartAmount } = useContext(ShopContext);
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

            {
                cartItems.map((item) => {
                    console.log("item", item);
                    let e = all_product.find((product) => product.id === Number(item.id))
                    console.log('e', e)
                    return (
                        <>
                            <div className={`${styles.cartItemsFormat} ${styles.cartItemsFormatMain}`}>
                                <img src={e.image} alt="image" className={styles.productIcon} />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <div className={styles.cartItemsQuantityBtnContainer}>
                                    <button className={styles.cartItemsQuantity}>{item.quantity}</button>
                                    <div className={styles.arrowsContainer}>
                                        <i className="ri-arrow-up-s-fill" onClick={() => addToCart(e.id)}></i>
                                        <i className="ri-arrow-down-s-fill" onClick={() => removeFromCart(e.id)}></i>
                                    </div>
                                </div>

                                <p>${e.new_price * item.quantity}</p>
                                <img className={styles.cartItemRemoveIcon} src={remove_icon} alt="" onClick={() => removeAllFromCart(e.id)} />
                            </div>
                            <hr />
                        </>
                    )
                })

            }
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
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
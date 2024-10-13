import React, { useContext, useState } from 'react'
import styles from './CartItems.module.css'
import all_product from '../Assets/all_product'
// import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector } from '../../Redux/cartReducer'
import { addToCart, removeFromCart, removeAllFromCart } from '../../Redux/cartReducer'

const CartItems = () => {

    // const { all_product, cartItems, addToCart, removeFromCart, removeAllFromCart, getTotalCartAmount } = useContext(ShopContext);
    const { cartItems, totalQuantity, totalPrice } = useSelector(cartSelector);
    const dispatch = useDispatch();

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
                    // console.log("item", item);
                    let e = all_product.find((product) => product.id === Number(item.productId))
                    console.log('e', e)
                    return (
                        <>
                            <div className={`${styles.cartItemsFormat} ${styles.cartItemsFormatMain}`}>
                                <img src={e.image} alt="image" className={styles.productIcon} />
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <div className={styles.cartItemsQuantityBtnContainer}>
                                    <button className={styles.cartItemsQuantity}>{item.qty}</button>
                                    <div className={styles.arrowsContainer}>
                                        <i className="ri-arrow-up-s-fill" onClick={() => dispatch(addToCart(e.id))}></i>
                                        <i className="ri-arrow-down-s-fill" onClick={() =>dispatch(removeFromCart(e.id))}></i>
                                    </div>
                                </div>

                                <p>${e.new_price * item.qty}</p>
                                <img className={styles.cartItemRemoveIcon} src={remove_icon} alt="" onClick={() => dispatch(removeAllFromCart(e.id))} />
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
                            <p>${totalPrice}</p>
                        </div>
                        <hr />
                        <div className={styles.cartItemsTotalItems}>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className={styles.cartItemsTotalItems}>
                            <h3>Total</h3>
                            <h3>${totalPrice}</h3>
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
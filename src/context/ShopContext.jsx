import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
import { toast } from 'react-toastify';
import { collection, addDoc, doc, getDoc, setDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import db from "../firebase";

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const getCartItems = async () => {
        const snapShot = await getDocs(collection(db, "cartItems"));
        console.log(snapShot);

        const cartItems = snapShot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        console.log(cartItems);
        setCartItems(cartItems);
    }

    useEffect(()=>{
        getCartItems();
    }, [])

    // const addToCart = (itemId) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    //     console.log(cartItems)
    //     toast.success('Product added to cart!', {position: "top-center", autoClose: 2000, hideProgressBar: true});
    // }

    const addToCart = async (itemId) => {
        // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        // console.log(cartItems)

        try {
            const docRef = doc(db, "cartItems", String(itemId));
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //update
                // Set the "quantity" field of the item
                console.log(docSnap)
                await updateDoc(docRef, {
                    quantity: docSnap.data().quantity + 1
                });
            } else {
                //add new
                await setDoc(doc(db, "cartItems", String(itemId)), { quantity: 1 });
            }
            getCartItems();
            toast.success('1 item added and cart updated!', { position: "top-center", autoClose: 2000, hideProgressBar: true });
        } catch (error) {
            toast.error('item could not be added to cart!', { position: "top-center", autoClose: 2000, hideProgressBar: true });
            console.log("error: ", error);
        }

    }

    const removeFromCart = async (itemId) => {
        // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        // toast.warning('1 item removed from cart!', {position: "top-center", autoClose: 2000, hideProgressBar: true});
        try {
            const docRef = doc(db, "cartItems", String(itemId));
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //update
                // Set the "quantity" field of the item
                if (docSnap.data().quantity > 1){
                    await updateDoc(docRef, {
                        quantity: docSnap.data().quantity - 1
                    });
                }else{
                    await deleteDoc(docRef);
                }
            } else {
                toast.error('No item to remove!', { position: "top-center", autoClose: 2000, hideProgressBar: true });
            }
            getCartItems();
            toast.success('1 item removed and cart updated', { position: "top-center", autoClose: 2000, hideProgressBar: true });
        } catch (error) {
            toast.error('item could not be removed', { position: "top-center", autoClose: 2000, hideProgressBar: true });
            console.log("error: ", error);
        }

    }

    const removeAllFromCart = async (itemId) => {
        try {
            await deleteDoc(doc(db, "cartItems", String(itemId)));
            getCartItems();
            toast.success('Product removed from cart!', { position: "top-center", autoClose: 2000, hideProgressBar: true });
        }
        catch (error) {
            toast.success('Product could not removed from cart', { position: "top-center", autoClose: 2000, hideProgressBar: true });
            console.log('error: ', error);
        }

        // setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
        // toast.warning('Item removed from cart!', {position: "top-center", autoClose: 2000, hideProgressBar: true});
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = all_product.find((product) => product.id === Number(cartItems[item].id))
            totalAmount += itemInfo.new_price * cartItems[item].quantity;
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            totalItem += cartItems[item].quantity;
        }
        return totalItem;
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, removeAllFromCart, getTotalCartAmount, getTotalCartItems, getCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
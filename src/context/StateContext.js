import React, {createContext, useContext, useState, useEffect} from "react";

import { client } from "../lib/client";

import imageUrlBuilder from "@sanity/image-url"

export const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantites] = useState(0);

    const [checkoutItems, setChekcoutItems] = useState([]);

    let foundProduct;
    let index;
    
    const [qty, setQty] = useState(1);

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1) return 1;

            return prevQty - 1
        })
    }

    const toggleCarItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id)

        if(value === 'inc') {
            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity +1} ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantites(prevTotalQuantities => prevTotalQuantities + 1);
        } else if(value === 'dec') {
            if(foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1} ])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantites(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
    }

    const onAdd = (product, quantity) => {
        const checkProductInCard = cartItems.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + quantity);
    
        if(checkProductInCard) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

        setCartItems(updatedCartItems);
        alert(`${qty} ${product.name} dodano u korpu`)
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }])
        }
    }

    // const checkoutProducts = (product, quantity) => {
    //     const checkProductInCard = cartItems.find((item) => item._id === product._id);
        
    //     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    //     setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    //     if(checkProductInCard) {
    //         const updatedCheckoutItems = checkoutItems.map((cartProduct) => {
    //             if(checkoutItems._id === product._id) return {
    //                 ...cartProduct,
    //                 quantity: cartProduct.quantity + quantity
    //             }
    //         })

    //         setChekcoutItems(updatedCheckoutItems);
    //     alert(`${qty} ${product.name} dodano u korpu`)
    //     } else {
    //         product.quantity = quantity;

    //         setChekcoutItems([...checkoutItems, { ...product }])
    //     }
    // }

    return (
        <Context.Provider
            value={{
                setShowCart,
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCarItemQuantity,
                checkoutItems,
                setChekcoutItems,
                // checkoutProducts
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
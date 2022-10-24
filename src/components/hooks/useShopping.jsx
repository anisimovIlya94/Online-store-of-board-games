import React, { useContext, useState } from 'react'

const ShoppingContext = React.createContext();

export const useShopping = () => {
    return useContext(ShoppingContext)
}
const initialState = [{ src: "warhammer-card.jpg", label: "Вампирский Манчкин",name:"Vampir", currentPrice: 743, bigPrice: null, id: "ad1"},
    { src: "warhammer-card.jpg", label: "Wharhammer40,000: Craftworlds Farseer",name:"Wharhammer", currentPrice: 5990, bigPrice: 6490,id: "ad2"}]

const ShoppingProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(initialState)
    const [promos, setPromos] = useState(["fdf", "123", "234"])
    const updateCartItems = (item) => {
        setCartItems((prevState) => ([...prevState, item]))
    }
    const getCartItemsCount = () => {
        return cartItems.length
    }
    const removeItem = (itemId) => {
        setCartItems((prevState) => {
            return prevState.filter((item)=>item.id !== itemId)
        })
    }
    return (<ShoppingContext.Provider value={{ updateCartItems, getCartItemsCount, cartItems, removeItem, promos }}>
        {children}
    </ShoppingContext.Provider>
    );
}

export default ShoppingProvider
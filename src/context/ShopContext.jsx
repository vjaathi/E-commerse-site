import CartItems from "../components/cartitem/CartItems";
import all_product from "../components/imges/all_product"
import React, { createContext, useState } from "react";

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length+1; index++) {
   cart[index]=0;
  }
  return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
      setCartItems( (prev) => ({...prev,[itemId]:prev[itemId]+1}));
      console.log(cartItems);
      
    }
    const removeFromCart = (itemId) => {
      setCartItems( (prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalAmound = () => {
      let totalAmound = 0;
      for( const item in cartItems){
        if(cartItems[item]>0){
          let iteminfo = all_product.find((product) => product.id===Number(item))
          totalAmound += cartItems[item] * iteminfo.new_price;
        }        
      }
      return totalAmound;
    }

    const getTotalItems = () => {
      let totalItem = 0
      for (const item in cartItems){
        if(cartItems[item]>0){
          totalItem += cartItems[item]
        }
      }
      return totalItem;
    }

    const contextValue = { getTotalItems,getTotalAmound,all_product,cartItems,addToCart,removeFromCart}
    
    return(
     <ShopContext.Provider value={contextValue}>
       {props.children}
     </ShopContext.Provider>
    )
}

export default ShopContextProvider
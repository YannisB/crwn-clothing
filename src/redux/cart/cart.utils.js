export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id ===cartItemToAdd.id)
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id 
            ? {...cartItem,quantity : cartItem.quantity +1 } 
            : cartItem 
            )
    }

    return [...cartItems, {...cartItemToAdd,quantity:1}]
}

export const clearItemFromCart = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id ===cartItemToRemove.id)
    if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
    }

    return[...cartItems]

    }

export const removeItemFromCart = (cartItems, cartItemToDecrement) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id ===cartItemToDecrement.id)
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrement.id);
      }
    
    return cartItems.map(cartItem => cartItem.id === cartItemToDecrement.id 
        ? {...cartItem,quantity : cartItem.quantity -1 } 
        : {...cartItem}
        )
    
    
}

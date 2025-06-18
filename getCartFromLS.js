import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLocalStorage = () => {
    let cartProduct = localStorage.getItem('cartProductLS');

    if(!cartProduct) return [];
    
    cartProduct = JSON.parse(cartProduct); // data ko json format me get karo

    // update cart value.
    updateCartValue(cartProduct);

    return cartProduct;

}
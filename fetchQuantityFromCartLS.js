import { getCartProductFromLocalStorage } from "./getCartFromLS"

export const fetchQuantityFromCartLS = (id, price) => {

    let cartProducts = getCartProductFromLocalStorage();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);
    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price
    }   

    return {quantity, price};   // here we have returned two things so we have creted a object.

}
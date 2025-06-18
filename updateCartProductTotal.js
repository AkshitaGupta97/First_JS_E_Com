import { getCartProductFromLocalStorage } from "./getCartFromLS"

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let initialValue = 0;

    let localCartProducts = getCartProductFromLocalStorage();
    let totalProductPrice = localCartProducts.reduce((accum, curEle) => {

        let productPrice = parseInt(curEle.price) || 0;
        return accum + productPrice;
    }, initialValue)

   // console.log(totalProductPrice)

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent =  `₹${totalProductPrice + 20.5}`;

}
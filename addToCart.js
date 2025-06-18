import { getCartProductFromLocalStorage } from "./getCartFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage();

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLocalStorage();

    const currentProduct = document.querySelector(`#card${id}`);
   // console.log(currentProduct);

   let quantity = currentProduct.querySelector(".productQuantity").innerText;   // as we want the inner text not div

   let price = currentProduct.querySelector(".productPrice").innerText;
   price = price.replace("₹", "");   // we need to replace because it will create problem while addition.

   let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

   if(existingProd && quantity > 1){
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updatedCart = {id, quantity, price};
    updatedCart = arrLocalStorageProduct.map((currProd) => {
        return currProd.id === id ? updatedCart : currProd
    });

    console.log(updatedCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    // showing pop up

    showToast("add", id);

   }

   if(existingProd) {
    return false;
   }

   price = Number(price * quantity);
   quantity = Number(quantity); // convert from strig to number.

   //console.log(quantity, price);

   let updatedPrice = {id, quantity, price};
   arrLocalStorageProduct.push(updatedPrice);

   localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

   // now add in local storage.

   updateCartValue(arrLocalStorageProduct);

   // if item is not exixting
   
   showToast("add", id);


}
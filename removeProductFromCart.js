import { getCartProductFromLocalStorage } from "./getCartFromLS"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


export const removeProductFromCart = (id) => {
    let cartProducts = getCartProductFromLocalStorage();

    // here we are trying to remove the particuler item so by clicking on remove button, it will delete.
    // we are using filter method so that we can fetch data from local storage, if the id will be matched we will remove
    // this and all will be present. -> i.e. we are using !==
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id); 

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        
        showToast("delete", id);   // this is for creating pop up after deletion
    }

    updateCartValue(cartProducts); // after removing we have updated


}
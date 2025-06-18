// importNode(): is a method of the document object. It is used to import a node from another document or from <template>
// it is important to use true parameter, so that all descendant node of <template> contenet is cloned. 

import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";


const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
const clone = productTemplate.content.cloneNode(true);

productContainer.append(clone);

//console.log(productContainer.innerHTML);

export const showProductContainer = (products) => {
    productContainer.innerHTML = "";

    if(!products){
        return false;
    }
    console.log(products);

    products.forEach((currProd) => {
        const {id, name, category, description, brand, price, stock, image } = currProd;

        const productClone = document.importNode(productTemplate.content, true); // by doing this all the code from template is passed to this

       // console.log("clone is : ", productClone);

        const cardValueElement = productClone.querySelector("#cardValue");
        if (cardValueElement) {
            cardValueElement.setAttribute('id', `card${id}`);
        } else {
            console.error("Element #cardValue not found in template!");
        }   // yaha maine cardValue ak reference liya and then id set kro taki, product increment ya decrement easily ho sake.

        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name; 
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price * 2}`;

        productClone.querySelector(".stockElement").addEventListener('click', (event) =>
            homeQuantityToggle(event, id, stock)
        );

        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock)
        });
       
     productContainer.append(productClone);
        
    })
}

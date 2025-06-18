import products from './api/products.json' assert { type: 'json' };
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCartProductFromLocalStorage } from "./getCartFromLS";
import { incrementDecrement } from './incrementDecrement';
import { removeProductFromCart } from './removeProductFromCart';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts = getCartProductFromLocalStorage();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curEle) => {
       return  curEle.id === curProd.id
    });
})

console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

if (!cartElement || !templateContainer) {
    console.error("cartElement or templateContainer not found in the DOM");
}

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const {category, id, image, name, stock, price } = curProd;     // destructuring the elements

        const productClone = document.importNode(templateContainer.content, true);

        const LSActualData = fetchQuantityFromCartLS(id, price);


        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".category").textContent = category;

        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = LSActualData.price;

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => {
            removeProductFromCart(id);
        })

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });

        cartElement.append(productClone);

    })
}

showCartProduct();


updateCartProductTotal();
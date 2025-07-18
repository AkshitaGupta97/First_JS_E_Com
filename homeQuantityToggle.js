
export const homeQuantityToggle = (event, id, stock) => {
    const currentCardElement = document.querySelector( `#card${id}`);
    //console.log(currentCardElement);

    const productQuantity = currentCardElement.querySelector(".productQuantity");
    
    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1; // yaha see hum quatity ko get kr rage hai

    if(event.target.className === "cartIncrement"){
        if(quantity < stock) quantity += 1;
        else if(quantity === stock) quantity = stock;
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 1) quantity -= 1;
    }

    productQuantity.textContent = quantity;
    //console.log(quantity)
    productQuantity.setAttribute('data-quantity', quantity.toString()); // whenever we increment or decrement the the productQuantity is updated.
    return quantity;


}
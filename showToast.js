
export function showToast(operation , id){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add"){
        toast.textContent = `Product with ID ${id} has been added.`;
    }
    else {
        toast.textContent = `Product with ID ${id} has been deleted.`;
    }
    
    document.body.appendChild(toast);

    // Automatically removed after some time 
    setTimeout(() => {
        toast.remove()
    }, 4000);

}
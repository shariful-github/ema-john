import { getShoppingItems } from "../utilities/manageLocalStorage";

const loadReviewProduct = async () =>{
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();
    
    const storedItems = getShoppingItems();

    const savedItems = [];
    for(const id in storedItems){
        const addedItem = products.find(product => product.id == id)
        
        if(addedItem){
            const quantity = storedItems[id]
            addedItem.quantity = quantity;
            savedItems.push(addedItem);
        }
    }

    return savedItems;
}

export default loadReviewProduct;

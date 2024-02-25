import { getShoppingItems } from "../utilities/manageLocalStorage";

const loadReviewProduct = async () =>{
    const loadedProducts = await fetch('https://fakestoreapi.com/products');
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

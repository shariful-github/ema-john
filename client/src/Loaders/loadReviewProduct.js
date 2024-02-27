import { getShoppingItems } from "../utilities/manageLocalStorage";

const loadReviewProduct = async () =>{
    const storedItems = getShoppingItems();
    const cartProductsIds = Object.keys(storedItems);

    const loadedProducts = await fetch('http://localhost:5000/cartProducts', {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(cartProductsIds)
    });
    const products = await loadedProducts.json();

    return products;
}

export default loadReviewProduct;

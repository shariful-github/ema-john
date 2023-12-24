const getShoppingItems = () =>{
    let shoppingItems = {};

    const storedItems = localStorage.getItem('shopping-items');

    if(storedItems){
        shoppingItems = JSON.parse(storedItems)
    }
    
    return shoppingItems;
}

const addToLocalStorage = (id) =>{
    let shoppingItems = getShoppingItems();

    const quantity = shoppingItems[id];

    if(!quantity){
        shoppingItems[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        shoppingItems[id] = newQuantity;
    }
    
    localStorage.setItem('shopping-items', JSON.stringify(shoppingItems));
}

const removeFromLocalStorage = (id) =>{
    let shoppingItems = getShoppingItems();

    if(shoppingItems){
        delete shoppingItems[id];
        localStorage.setItem('shopping-items', JSON.stringify(shoppingItems));
    }
}

const deleteShoppingItems = () =>{
    localStorage.removeItem('shopping-items');
}

export{
    addToLocalStorage,
    removeFromLocalStorage,
    getShoppingItems,
    deleteShoppingItems
}
// quais ações meu carrinho pode fazer

// ✅ -> adicionar item
async function addItem(userCart, item) {
    userCart.push(item);
};

// ✅ -> deletar um item do carrinho
async function deleteItem(userCart,index) {
    //transforma o index visual no index do back-end
    const deleteIndex = index - 1;

    //verificar se é maior que zero e se é menor que o tamanho do carrinho
    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex,1);
    } 
};

// ✅ -> remover um item
async function removeItem(userCart, item) {

    //1. Econtrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    //2. Caso não encontre o item
    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    //3. Item > 1 - Subtrair 1 item,  item = 1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4. caso o item = 1
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1);
        return;
    }

};

//✅ -> totalizador do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart total is");

    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`🛒 Total do carrinho: R$${result}`);
};

// ✅ -> Informações do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item,index)=>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | x${item.quantity} | Subtotal R$ ${item.subtotal()}`);
    });
}


export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}

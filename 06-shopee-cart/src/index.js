import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

//Criando 2 Itens
const item1 = await createItem("hotwhells ferrari",20.99,1);
const item2 = await createItem("hotwhells lamborghini",39.99,3);

//Adicionei 2 itens ao carrinho
await cartService.addItem(myCart,item1);
await cartService.addItem(myCart,item2);

//Deletei 1 item do carrinho
//await cartService.deleteItemItem(myCart,1);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

//Mostrando os itens do carrinho
await cartService.displayCart(myCart);

//Deletei 2 itens do carrinho
//await cartService.deleteItem(myCart,item2.name);
//await cartService.deleteItem(myCart,item1.name);

await cartService.calculateTotal(myCart);
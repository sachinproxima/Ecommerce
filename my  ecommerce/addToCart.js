import {getCartProductFromLS} from "./getCartproductfromls.js";
import {updateCartvalue} from "./updateCartValue.js";
export const addToCart = (event,id,stock) =>{



    let arrLocalProduct= getCartProductFromLS();



const currentProdElem=document.querySelector(`#card${id}`)
// console.log(currentProdElem);

let quantity=currentProdElem.querySelector(".productQuantity").innerText
let price=currentProdElem.querySelector(".productPrice").innerText

price=price.replace("₹","");

price=Number(price*quantity);
quantity=Number(quantity)

let updateCart={id,quantity,price}

arrLocalProduct.push(updateCart)
// console.log(quantity,price);
localStorage.setItem('cartProduct',JSON.stringify(arrLocalProduct))





updateCartvalue(arrLocalProduct)
}
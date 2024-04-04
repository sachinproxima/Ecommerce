export const getCartProductFromLS = ()=>{


    let cartProducts=localStorage.getItem("cartProduct");
    if(!cartProducts){



return [];

    }


    cartProducts = JSON.parse(cartProducts);
    return cartProducts
}
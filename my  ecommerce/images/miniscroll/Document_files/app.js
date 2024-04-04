import {showProductContainer} from "./homeproductcaed.js"

// import "./style.css";



fetch("./api/products.json")
.then(response => response.json())
.then(data => showinfo(data));
function showinfo(data){

    showProductContainer(data)



}


// call the function to display all the products as a card

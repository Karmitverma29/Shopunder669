// Access the product data from the query string
import Navbar from "../Nav.js";
import Header from '../Header.js';

let nav=document.getElementById("nav");
nav.innerHTML=Navbar();

    let head = document.querySelector('#Header')
    head.innerHTML =Header();

    import Footer from '../Footer.js'
    let container = document.querySelector('#Footer')
       container.innerHTML =Footer();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// Make a server request to get the product details
async function getProductDetails() {
    let res = await fetch(`https://energetic-pea-coat-dog.cyclic.app/product/single/${id}`);
    let data = await res.json();
    console.log(data);

    // Display the product details on the page

    let div=document.createElement("div");
    let productImage = document.getElementById("product-image");
    productImage.src = data.image;
    let name = document.getElementById("product-name");
    name.innerText = data.name;
    let productPrice = document.getElementById("product-price");
    productPrice.innerText = "Price:"+" "+data.price;
    let productDesc = document.getElementById("product-desc");
    let Offerprice = document.getElementById("offer-price");
    Offerprice.innerText = "Offer Price:"+" "+data.offer_price;

    productDesc.innerText = data.description;
    let btn=document.getElementById("add-btn");
    btn.innerText="Add to cart";
    btn.addEventListener("click",()=>{
        let storeData={
            image:data.image,
            name:data.name,
            description:data.description,
            price:data.price,
            offer_price:data.offer_price
        }
        let token="shop669 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2NhM2JhNWRkNzEwNmNmM2YzNDBlYzgiLCJpYXQiOjE2NzQxOTc5NDJ9.tQPl_MmWwZPY-x_cD2L_j4dyMSNwx4r57YgGa7HfS7g"
        fetch("https://energetic-pea-coat-dog.cyclic.app/cart/create", {
method: "POST",
headers: { "Content-Type": "application/json","authorization":token},
body: JSON.stringify(storeData),

})
.then((response) => response.json())
.then((data) => {
  alert("Item created successfully");
})
.catch((error) => {
  alert("Error: " + error);
});


    })
   
    
    
    
    
}
getProductDetails();




// Access the product data from the query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// Make a server request to get the product details
async function getProductDetails() {
    let res = await fetch(`https://energetic-pea-coat-dog.cyclic.app/product/single/${id}`);
    let data = await res.json();
    console.log(data);

    // Display the product details on the page

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
    btn.innerText="Order Now";
    btn.addEventListener("click",()=>{
        let storeData={
            image:data.image,
            name:data.name,
            description:data.description,
            price:data.price,
            offer_price:data.offerPrice
        }
       

        localStorage.setItem("products",JSON.stringify(storeData));
    })
   
    
    
    
    
}
getProductDetails();




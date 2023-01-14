// Access the product data from the query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// Make a server request to get the product details
async function getProductDetails() {
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    let data = await res.json();
    console.log(data);

    // Display the product details on the page

    let productImage = document.getElementById("product-image");
    productImage.src = data.images[0];
    let productBrand = document.getElementById("product-brand");
    productBrand.innerText = data.brand;
    let productCategory = document.getElementById("product-category");
    productCategory.innerText = data.category;
    let productPrice = document.getElementById("product-price");
    productPrice.innerText = data.price;
    let productDesc = document.getElementById("product-desc");
    productDesc.innerText = data.description;
    let btn=document.getElementById("add-btn");
    btn.innerText="Add to cart";
    btn.addEventListener("click",()=>{
        addtocart(data)
    })
    
    
    
    
    
}
getProductDetails();

const addtocart=(data)=>{

    let getdata=JSON.parse(localStorage.getItem("products"))||[];

    let obj={
        image:data.images[0],
                brand:data.brand,
                category:data.category,
                price:data.price,
                id:getdata.length+1,
                quantity:1
    }

    getdata.push(obj);
    localStorage.setItem("products",JSON.stringify(getdata));
}


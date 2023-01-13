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
    // btn.addEventListener("click",(elem)=>{
    //     let existingData = JSON.parse(localStorage.getItem("products")) || [];
    
    //     let newProduct = {
    //         image: elem.images,
    //         brand: elem.brand,
    //         category: elem.category,
    //         price: elem.price,
    //         id: existingData.length + 1,
    //         quantity: 1
    //     }
    
    //     existingData.push(newProduct);
    
    //     localStorage.setItem("products", JSON.stringify(newProduct));
    // });
    
    
    
    
    
}
getProductDetails();


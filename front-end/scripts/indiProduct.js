// Access the product data from the query string
import Navbar from "../Nav.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import OutNavbar from "../logoutNav.js";
let head = document.querySelector("#Header");
head.innerHTML = Header();


let container = document.querySelector("#Footer");
container.innerHTML = Footer();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
let reviews;
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var token =getCookie("shopToken");
if (token == "") {
  let nav = document.getElementById("nav");
  nav.innerHTML = Navbar();
} else {
  let nav = document.getElementById("nav");
  nav.innerHTML = OutNavbar();
}
// Make a server request to get the product details
async function getProductDetails() {
  let res = await fetch(
    `https://energetic-pea-coat-dog.cyclic.app/product/single/${id}`
  );
  let data = await res.json();

  // Display the product details on the page
  reviews=data.review;
  reviews.map((ele)=>{
    const newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `
      <div class="review-header">
        <span class="review-rating">
          ${getRatingStars(ele.rating)}
        </span>
      </div>
      <p class="review-body">${ele.reviewText}</p>
    `;
  
    // Add new review to review list
    document.querySelector(".review-list").append(newReview);
  })
  let productImage = document.getElementById("product-image");
  productImage.src = data.image;
  let name = document.getElementById("product-name");
  name.innerText = data.name;
  let productPrice = document.getElementById("product-price");
  productPrice.innerText = "Price:" + " " + data.price;
  let productDesc = document.getElementById("product-desc");
  let Offerprice = document.getElementById("offer-price");
  Offerprice.innerText = "Offer Price:" + " " + data.offerPrice;

  productDesc.innerText = data.description;
  let btn = document.getElementById("add-btn");
  btn.innerText = "Add to cart";
  btn.addEventListener("click", () => {
    if (token == "") {
      alert("Please Login first.");
      window.location.href="./login.html";
    } else {
      let storeData = {
        image: elem.image,
        name: elem.name,
        description: elem.description,
        price: elem.price,
        offer_price: elem.offerPrice,
      };
    
      fetch("https://energetic-pea-coat-dog.cyclic.app/cart/create", {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
        body: JSON.stringify(storeData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Item created successfully");
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    }
  });
}
getProductDetails();
const submitReview= async(e)=> {
  e.preventDefault(); // Prevent form from submitting

  // Get form data
  const rating = document.getElementById("rating").value;
  const reviewText = document.getElementById("review-text").value;
if(rating!=="" && reviewText!==""){
  let pload={
    rating,
    reviewText
  }
  reviews.push(pload);
  const mdata={
    rv:{
      review:reviews
    }
  }
  await fetch(
    `https://energetic-pea-coat-dog.cyclic.app/product/review/${id}`,{
      method: "PATCH",
      headers: { "Content-Type": "application/json", authorization: token },
      body: JSON.stringify(mdata)
    }
  )
  .then(()=>{
    getProductDetails();
  })
}
  // Create new review element
  

  // Clear form
  document.getElementById("rating").value="";
  document.getElementById("review-text").value="";
}

// Listen for form submission
document
  .getElementById("submit-review")
  .addEventListener("click", submitReview);



function getRatingStars(rating) {
  let stars = "";
  for (let i = 1; i <= rating; i++) {
    if (i <= rating) {
      stars += '<i class="fa fa-star"></i>';
    }
  }
  return stars;
}

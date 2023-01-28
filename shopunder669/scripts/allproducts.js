import Navbar from "../Nav.js";

import Header from "../Header.js";
import Footer from "../Footer.js";
import OutNavbar from "../logoutNav.js";
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
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
let token = getCookie("shopToken");

if (token == "") {
  let nav = document.getElementById("nav");
  nav.innerHTML = Navbar();
} else {
  let nav = document.getElementById("nav");
  nav.innerHTML = OutNavbar();
}
let container = document.querySelector("#Footer");
container.innerHTML = Footer();
let head = document.querySelector('#Header')
    head.innerHTML =Header();
async function getdata() {
  let res = await fetch(
    `https://energetic-pea-coat-dog.cyclic.app/product/all`
  );
  let data = await res.json();
  console.log(data);
  renderData(data);
}
getdata();

function renderData(data) {
  let container = document.querySelector(".productDisplay");
  container.setAttribute("id","allproducts")
  container.innerHTML = null;
  
  data.forEach((elem) => {
    console.log(elem);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.image;
    let name = document.createElement("h2");
    name.innerText = elem.name;
    let desc = document.createElement("p");
    desc.innerText = elem.description;
    let price = document.createElement("p");
    price.innerText = "Price" + ":" + " ₹"+ elem.price;
    price.setAttribute("class",'price');
    let offer_price = document.createElement("p");
    offer_price.innerText = "Offer price" + ":"+ " ₹" + elem.offerPrice;
    offer_price.setAttribute("class",'discount')
    let btn = document.createElement("button");
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
    img.addEventListener("click", () => {
      window.location.href = `indiProduct.html?id=${elem._id}`;
    });
    div.append(img, name, desc, price, offer_price, btn);
    container.append(div);
  });
}

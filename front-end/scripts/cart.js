import Navbar from "../Nav.js";
import Header from "../Header.js";

let head = document.querySelector("#Header");
head.innerHTML = Header();
import Footer from "../Footer.js";
import OutNavbar from "../logoutNav.js";
let fcontainer = document.querySelector("#Footer");
fcontainer.innerHTML = Footer();

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

let token =getCookie("shopToken");

if (token == "") {
  let nav = document.getElementById("nav");
  nav.innerHTML = Navbar();
} else {
  let nav = document.getElementById("nav");
  nav.innerHTML = OutNavbar();
}
if(token==""){
  alert("Please login first");
  window.location.href="./login.html";
}
let data=[];
async function getdata() {
  let res = await fetch(`https://energetic-pea-coat-dog.cyclic.app/cart`, {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: token },
  });
  data = await res.json();
  if(data.length<=0){
    let ediv=document.createElement("div");
    ediv.innerHTML="Your cart is empty"
    container.append(ediv)
  }
  else{
    renderData(data);
  }
  
}
getdata();
let p = 0;
let container = document.getElementById("cart_page");

function renderData(data) {
  container.innerHTML = null;

  if(data.length>0){
    data.forEach((elem) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.image;
        let name = document.createElement("h2");
        name.innerText = elem.name;
        let desc = document.createElement("p");
        desc.innerText = elem.description;
        let price = document.createElement("p");
        price.innerText = "Price:" + " " + elem.price;
        let offer_price = document.createElement("p");
        offer_price.innerText = "Offer price:" + " " + elem.offer_price;
        let delete_btn = document.createElement("button");
        offer_price.setAttribute("class",'discount');
        price.setAttribute("class",'price');
        delete_btn.innerText = "REMOVE";
        let id = elem._id;
        let totalPrice = document.getElementById("total-price");
        p = p + elem.offer_price;
        totalPrice.innerText = "Total-price: ₹" + p;
        delete_btn.addEventListener("click", () => {
          fetch(`https://energetic-pea-coat-dog.cyclic.app/cart/delete/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json", authorization: token },
          })
            .then((response) => response.json())
            .then((data) => {
              alert("Item deleted successfully");
              p=0;
              getdata();
            })
            .catch((error) => {
              alert("Error: " + error);
            });
        });
    
        img.addEventListener("click", () => {
          window.location.href = `indiProduct.html?id=${elem.id}`;
        });
        div.append(img, name, desc, price, offer_price, delete_btn);
        container.append(div);
      });
  }
}

let coupondata=[];
fetch("https://energetic-pea-coat-dog.cyclic.app/coupon", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    coupondata = data;
    coupondata.map((el) => {
      let coupon_code = document.getElementById("coupon-code");
      let option = document.createElement("option");
      option.innerHTML = el.couponcode;
      option.value = `${el.discount} ${el.minimumPurchase}`;
      coupon_code.append(option);
    });
  })
  .catch((error) => {
    alert("Error: " + error);
  });

document.getElementById("coupon-code").addEventListener("change", () => {
  let [discount, minimumPurchase] = document
    .getElementById("coupon-code")
    .value.split(" ")
    .map(Number);
  let finalDiscount = document.getElementById("discount");
  let finalprice = document.getElementById("final-price");
  if (p >= minimumPurchase && minimumPurchase!=undefined) {
    let cart_discount = (discount * p) / 100;
    let netprice = p - cart_discount;
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerText = "Final Price: ₹" + netprice;
    finalDiscount.innerHTML = "Total discount:" + " " + cart_discount;
    finalprice.innerText = "Final Price:" + " " + netprice;
  } else if(p < minimumPurchase && minimumPurchase!=undefined) {
    alert(`Your cart value must be more than ${minimumPurchase}`);
    document.getElementById("coupon-code").value="";
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerText = "Final Price: ₹" + p;
    document.getElementById("discount").innerHTML="";
    document.getElementById("final-price").innerHTML="";
  }
  else{
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerText = "Final Price: ₹" + p;
    document.getElementById("discount").innerHTML="";
    document.getElementById("final-price").innerHTML="";
  }
});

document.querySelector(".checkout").addEventListener("click",(e)=>{
  e.preventDefault()
  if(data.length<=0){
    alert("Your cart is empty")
  }
  else{
    let fvalue=document.getElementById("total-price").innerHTML;
    fvalue=fvalue.split("₹");
    fvalue=fvalue[1];
    setCookie("shopPrice",fvalue,30);
    setCookie("shopCart",JSON.stringify(data),30);
    window.location.href="./address.html"
  }
});
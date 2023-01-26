import Navbar from "../Nav.js";
import Header from '../Header.js';

let nav=document.getElementById("nav");
nav.innerHTML=Navbar();
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
    let head = document.querySelector('#Header')
    head.innerHTML =Header();

    import Footer from '../Footer.js'
    let container = document.querySelector('#Footer')
       container.innerHTML =Footer();


async function getdata(){


    let res=await fetch(`https://energetic-pea-coat-dog.cyclic.app/product/Caps`);
    let data=await res.json();
    console.log(data)
    renderData(data);
}
getdata();

function renderData(data){
    let container=document.getElementById("caps");
    container.innerHTML=null;

    data.forEach((elem)=>{

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.image;
        let name=document.createElement("h2");
        name.innerText=elem.name
        let desc=document.createElement("p");
        desc.innerText=elem.description;
        let price=document.createElement("p");
        price.innerText=elem.price;
        let offer_price=document.createElement("p");
        offer_price.innerText=elem.offer_Price;
        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        btn.addEventListener("click",()=>{
            let storeData={
                image:elem.image,
                name:elem.name,
                description:elem.description,
                price:elem.price,
                offer_price:elem.offer_Price
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
        img.addEventListener("click", () => {
          
            window.location.href = `indiProduct.html?id=${elem.id}`;
        });
        div.append(img,name,desc,price,offer_price,btn);
        container.append(div);

    })

}
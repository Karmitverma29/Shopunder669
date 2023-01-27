import Navbar from "../Nav.js";
import Header from '../Header.js';

let nav=document.getElementById("nav");
nav.innerHTML=Navbar();

    let head = document.querySelector('#Header')
    head.innerHTML =Header();

 
let data=JSON.parse(localStorage.getItem("Searched_products"));

function renderData(data){
    let container=document.getElementById("searched");
    container.innerHTML=null;
console.log(data)
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
        offer_price.innerText=elem.offer_price;
        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        btn.addEventListener("click",()=>{
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

        })
        img.addEventListener("click", () => {
          
            window.location.href = `indiProduct.html?id=${elem.id}`;
        });
        div.append(img,name,desc,price,offer_price,btn);
        container.append(div);

    })

}
renderData(data);
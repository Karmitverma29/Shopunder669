import Navbar from "../Nav.js";
import Header from '../Header.js';

let nav=document.getElementById("nav");
nav.innerHTML=Navbar();

    let head = document.querySelector('#Header')
    head.innerHTML =Header();

    import Footer from '../Footer.js'
    let getfooter = document.querySelector('#Footer')
       getfooter.innerHTML =Footer();

let data=localStorage.getItem("searched_products");


function renderData(data){
    let container=document.getElementById("searched");
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
        offer_price.innerText=elem.offer_price;
        let btn=document.createElement("button");
        btn.innerText="Order Now";
        btn.addEventListener("click",()=>{
            let storeData={
                image:elem.image,
                name:elem.name,
                description:elem.description,
                price:elem.price,
                offer_price:elem.offerPrice
            }
         

            localStorage.setItem("products",JSON.stringify(storeData));
        })
        img.addEventListener("click", () => {
          
            window.location.href = `indiProduct.html?id=${elem.id}`;
        });
        div.append(img,name,desc,price,offer_price,btn);
        container.append(div);

    })

}
renderData(data);
import Navbar from "../Nav.js";

let nav=document.getElementById("nav");
nav.innerHTML=Navbar();
import Header from '../Header.js';


    let head = document.querySelector('#Header')
    head.innerHTML =Header();
    import Footer from '../Footer.js'
    let container = document.querySelector('#Footer')
       container.innerHTML =Footer();
async function getdata(){


    let res=await fetch(`https://energetic-pea-coat-dog.cyclic.app/product/books`);
    let data=await res.json();
    console.log(data)
    renderData(data);
}
getdata();

function renderData(data){
    let container=document.getElementById("shirts");
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
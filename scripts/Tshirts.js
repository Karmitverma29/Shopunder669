import Navbar from "../Nav.js";
let nav=document.getElementById("nav");
nav.innerHTML=Navbar();
async function getdata(){


    let res=await fetch(`http://localhost:3000/clothes`);
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
        offer_price.innerText=elem.offerPrice;
        let btn=document.createElement("button");
        btn.innerText="Order Now";
        img.addEventListener("click", () => {
          
            window.location.href = `indiProduct.html?id=${elem.id}`;
        });
        div.append(img,name,desc,price,offer_price,btn);
        container.append(div);

    })

}
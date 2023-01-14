import Navbar from "../Nav.js";
let nav=document.getElementById("nav");
nav.innerHTML=Navbar();
async function getdata(){


    let res=await fetch(`https://dummyjson.com/products`);
    let data=await res.json();
    console.log(data.products)
    renderData(data.products);
}
getdata();

function renderData(data){
    let container=document.getElementById("shirts");
    container.innerHTML=null;

    data.forEach((elem)=>{

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.images[0];
        let brand=document.createElement("h2");
        brand.innerText=elem.brand
        let category=document.createElement("h3");
        category.innerText=elem.category;
        let desc=document.createElement("p");
        desc.innerText=elem.description;
        let price=document.createElement("p");
        price.innerText=elem.price;
        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        btn.addEventListener("click",()=>{
            let arrydata=JSON.parse(localStorage.getItem("products"))||[];
            let obj={
                image:elem.images[0],
                brand:elem.brand,
                category:elem.category,
                price:elem.price,
                id:arrydata.length+1,
                quantity:1
            }
            arrydata.push(obj);
            localStorage.setItem("products",JSON.stringify(arrydata));
        })
        img.addEventListener("click", () => {
          
            window.location.href = `indiProduct.html?id=${elem.id}`;
        });
        div.append(img,brand,category,desc,price,btn);
        container.append(div);

    })

}
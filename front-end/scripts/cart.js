import Navbar from "../Nav.js";

let nav=document.getElementById("nav");
nav.innerHTML=Navbar();
import Header from '../Header.js';


    let head = document.querySelector('#Header')
    head.innerHTML =Header();
    import Footer from '../Footer.js'
    let container = document.querySelector('#Footer')
       container.innerHTML =Footer();
       let token="shop669 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2NhM2JhNWRkNzEwNmNmM2YzNDBlYzgiLCJpYXQiOjE2NzQxOTc5NDJ9.tQPl_MmWwZPY-x_cD2L_j4dyMSNwx4r57YgGa7HfS7g"

async function getdata(){


    let res=await fetch(`https://energetic-pea-coat-dog.cyclic.app/cart`,{
        method: "GET",

        headers: { "Content-Type": "application/json","authorization":token},

    });
    let data=await res.json();
    console.log(data)
    renderData(data);
}
getdata();
let p=0;
function renderData(data){
    let container=document.getElementById("cart_page");

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
        price.innerText="Price:"+" "+elem.price;
        let offer_price=document.createElement("p");
        offer_price.innerText="Offer price:"+" "+elem.offer_price;
        let delete_btn=document.createElement("button");
        delete_btn.innerText="REMOVE";
        let id=elem._id;
        let totalPrice=document.getElementById("total-price");
        p=p+elem.offer_price;
        totalPrice.innerText="Total-price: "+p+"/-"
        delete_btn.addEventListener("click",()=>{
            fetch(`https://energetic-pea-coat-dog.cyclic.app/cart/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json","authorization":token},
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Item deleted successfully");
      getdata();
    })
    .catch((error) => {
      alert("Error: " + error);
    });
        })
        
        img.addEventListener("click", () => {
          
            window.location.href = `indiProduct.html?id=${elem.id}`;
        });
        div.append(img,name,desc,price,offer_price,delete_btn);
        container.append(div);

    })

}

let coupondata;
fetch('https://energetic-pea-coat-dog.cyclic.app/coupon',{
    method:'GET',
})
.then((response) => response.json())
    .then((data) => {
coupondata=data;
console.log(coupondata);
coupondata.map((el)=>{

    let coupon_code=document.getElementById("coupon-code");
    let option=document.createElement("option");
    option.innerHTML=el.couponcode;
    option.value=`${el.discount} ${el.minimumPurchase}`;
    coupon_code.append(option);
    
})


    })
    .catch((error) => {
      alert("Error: " + error);
      
    });

    document.getElementById("coupon-code").addEventListener("change",()=>{
       let [discount,minimumPurchase] =document.getElementById("coupon-code").value.split(" ").map(Number);
       let finalDiscount=document.getElementById("discount");
       let finalprice=document.getElementById("final-price");
       if(p>=minimumPurchase){
        let cart_discount=discount*p/100;
        let netprice=p-cart_discount;
        let totalPrice=document.getElementById("total-price");
     totalPrice.innerText="Final Price: "+netprice+"/-";
finalDiscount.innerHTML="Total discount:"+" "+cart_discount;
finalprice.innerText="Final Price:"+" "+netprice
       }
       else{
        alert(`Your cart value must be more than ${minimumPurchase}`);
       }
        
    })




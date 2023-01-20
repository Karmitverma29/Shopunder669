
let container=document.getElementById("couponCont");
document.getElementById("addCoupon").addEventListener("click",()=>{
    container.innerHTML=null;

    let div=document.createElement("div");
    div.setAttribute("id","couponformadd")
    let couponcode=document.createElement("input");
    couponcode.placeholder="Coupon code";
    let discount=document.createElement("input");
    discount.placeholder="Discount";
    let minip=document.createElement("input");
    minip.placeholder="Minimum purchase";
    let addbtn=document.createElement("button");
    addbtn.innerText="Add Coupon";

    addbtn.addEventListener("click",()=>{
        
        let coupondata={

            couponcode:couponcode.value,
            discount:+discount.value,
            minimumPurchase:+minip.value,

        }
        console.log(coupondata)
        if(couponcode.value!==""&&discount.value!==""&&minip.value!==""){
            fetch("https://energetic-pea-coat-dog.cyclic.app/coupon/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(coupondata),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Coupon added successfully");
    })
    .catch((error) => {
      alert("Error: " + error);
    });
        }
    })
    div.append(couponcode,discount,minip,addbtn);
    container.append(div);

    

})

document.getElementById("deleteCoupon").addEventListener("click",()=>{
    container.innerHTML=null;
    
    fetch("https://energetic-pea-coat-dog.cyclic.app/coupon", {
        method: "GET",


 
      })
        .then((response) => response.json())
        .then((data) => {
            data.map((el)=>{

                let div=document.createElement("div");
                div.setAttribute("id","deletebox")
                let p1=document.createElement("p");
                p1.innerText="Coupon code -- "+el.couponcode;
                let p2=document.createElement("p");
                p2.innerText="Discount -- "+el.discount;
                let p3=document.createElement("p");
                p3.innerText="Minimum purchase -- "+el.minimumPurchase;
                let delbtn=document.createElement("button");
                delbtn.innerText="Delete Coupon";
                div.append(p1,p2,p3,delbtn);
                container.append(div);
                delbtn.addEventListener("click",()=>{
                    fetch(`https://energetic-pea-coat-dog.cyclic.app/coupon/delete/${el._id}`, {
                        method: "DELETE",
                      })
                        .then((response) => response.json())
                        .then((data) => {
                          alert("Coupon deleted successfully");
                          
                        })
                        .catch((error) => {
                          alert("Error: " + error);
                        });
                })





            })
        })
        .catch((error) => {
          alert("Error: " + error);
        });

    
})



function Getdata(){
  let manageProd=[];
  fetch("https://energetic-pea-coat-dog.cyclic.app/product/all", {
    method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      manageProd=data;
      Display(manageProd);
    })
    .catch((error) => {
      alert("Error: " + error);
    });

}
document.getElementById("all").addEventListener("click",()=>{

Getdata();

})
let editID="";
function Display(data){
  let container=document.getElementById("container");
container.innerHTML=null;
  data.forEach((elem)=>{

    let div=document.createElement("div");
    div.setAttribute("id","Single_product");
    
    let div_img=document.createElement("div");

    let img=document.createElement("img");
    img.src=elem.image;
    div_img.append(img);
    let name=document.createElement("h2");
    name.innerText=elem.name
    let desc=document.createElement("p");
    desc.innerText=elem.description;
    let price=document.createElement("p");
    price.innerText="Price:"+" "+elem.price;
    let offer_price=document.createElement("p");
    offer_price.innerText="Offer Price:"+" "+elem.offerPrice;
   
    let edit=document.createElement("button");
    edit.innerText="EDIT";
    edit.setAttribute("id","open")
    edit.addEventListener("click",()=>{
      modal.classList.add("show");
      editID=elem._id;
    })
    let Delete=document.createElement("button");
    Delete.innerText="DELETE";
    Delete.setAttribute("id","delbtn")

    Delete.addEventListener("click",()=>{
      fetch(`https://energetic-pea-coat-dog.cyclic.app/product/all/delete/${elem._id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Item deleted successfully");
          Getdata();
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    })

    div.append(div_img,name,desc,price,offer_price,edit,Delete);
    container.append(div);
    const modal = document.getElementById("modal_container");
    const cancel=document.getElementById("cancel");
   
    cancel.addEventListener("click", () => {
      
      modal.classList.remove("show");
    });
})

}

document.getElementById("add").addEventListener("click",()=>{
  let container=document.getElementById("container");
  container.innerHTML=null;

let addprod=[
  "create-image","create-category","create-name","create-description","create-price","create-offer-price"
]
let ph=["Image","Category","Name","Description","Price","Offer price"];
addprod.forEach((el,id)=>{

  let input=document.createElement("input");
  input.setAttribute("id",el);
  input.setAttribute("placeholder",ph[id]);

  container.append(input);

})
let addProduct=document.createElement("button");
addProduct.innerText="Add Product";
addProduct.setAttribute("id","add_prod");
container.append(addProduct);
document.getElementById("add_prod").addEventListener("click",()=>{
  let productData=[];
  fetch("https://energetic-pea-coat-dog.cyclic.app/product/all", {
    method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      productData=data;
    })
    .catch((error) => {
      alert("Error: " + error);
    });
  const image = document.getElementById("create-image").value;
  console.log(image)
  const name = document.getElementById("create-name").value;
  const description = document.getElementById("create-description").value;
  const price = document.getElementById("create-price").value;
  const category=document.getElementById("create-category").value;
  const offer_price = document.getElementById("create-offer-price").value;
if(image!==""&&name!==""&&description!==""&&price!==""&&category!==""&&offer_price!==""){
  fetch("https://energetic-pea-coat-dog.cyclic.app/product/all/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id:productData.length+1, image, name, description, price, offer_price,category }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Item created successfully");
    })
    .catch((error) => {
      alert("Error: " + error);
    });
}
else{
  alert("Please fill all the Input fields.")
}
})


})

document.getElementById("submit").addEventListener("click",()=>{
  const image = document.getElementById("update-image").value;
  const name = document.getElementById("update-name").value;
  const description = document.getElementById("update-description").value;
  const price = document.getElementById("update-price").value;
  const offerPrice = document.getElementById("update-offer-price").value;

  const item = {};
  if (image != "") {
    item.image = image;
  }
  if (name != "") {
    item.name = name;
  }
  if (description != "") {
    item.description = description;
  }
  if (price != "") {
    item.price = price;
  }
  if (offerPrice != "") {
    item.offerPrice = offerPrice;
  }
  fetch(`https://energetic-pea-coat-dog.cyclic.app/product/update/${editID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error updating item");
      }
      console.log(response)
    })
    .then((data) => {
      alert("Item updated successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error updating item");
    });
})
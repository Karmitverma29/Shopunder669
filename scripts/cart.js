let cartData = JSON.parse(localStorage.getItem("products")) 
let tbody = document.querySelector("#cart-items")

function renderCart() {
let container=document.getElementById("cartproduct");
    cartData.forEach(function(item,id) {
        let div=document.createElement("div");
       let image=document.createElement("img");
       image.src=item.image;
       let brand=document.createElement("h2");
       brand.innerText=item.brand;
       let category=document.createElement("h3");
       category.innerText=item.category;
       let price=document.createElement("p");
       price.innerText=item.price;
       let remove=document.createElement("button");
    remove.innerText="Remove";
    remove.onclick = () => {
        deleteFromCart(id);
    }
    
       div.append(image,brand,category,price,remove);
       container.append(div);
       

    });
}

renderCart()
let deleteFromCart = (index) => {
    // console.log(index);
    let cart = JSON.parse(localStorage.getItem("products"));
    cart.splice(index,1);
    window.location.reload();
    localStorage.setItem("products",JSON.stringify(cart));
    renderCart(cart);
}
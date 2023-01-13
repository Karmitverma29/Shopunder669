function renderCart() {
  let cartData = JSON.parse(localStorage.getItem("products"));
  let container = document.getElementById("cartproduct");
  container.innerHTML = null;
  cartData.forEach(function (item, id) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = item.image;
    let brand = document.createElement("h2");
    brand.innerText = item.brand;
    let category = document.createElement("h3");
    category.innerText = item.category;
    let price = document.createElement("p");
    price.innerText = item.price;
    let qtdiv = document.createElement("div");
    qtdiv.setAttribute("id", "qtdiv");

    let inc = document.createElement("button");
    let dec = document.createElement("button");
    let qty = document.createElement("p");
    inc.innerHTML = "+";
    inc.onclick = () => {
      incqty(id);
    };
    dec.onclick = () => {
      decqty(id);
    };
    dec.innerHTML = "-";
    qty.innerText = item.quantity;
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.onclick = () => {
      deleteFromCart(id);
    };
    qtdiv.append(inc, qty, dec);
    div.append(image, brand, category, price, qtdiv, remove);
    container.append(div);
  });
}

renderCart();
let deleteFromCart = (index) => {
  // console.log(index);
  let cart = JSON.parse(localStorage.getItem("products"));
  cart.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(cart));
  renderCart(cart);
};
const incqty = (ind) => {
  let cart = JSON.parse(localStorage.getItem("products"));
  cart[ind].quantity++;
  localStorage.setItem("products", JSON.stringify(cart));
  renderCart(cart);
};

const decqty = (ind) => {
  let cart = JSON.parse(localStorage.getItem("products"));
  if (cart[ind].quantity == 1) {
    alert("You have reached the minimum quantity of this product")
  } else {
    cart[ind].quantity--;
    localStorage.setItem("products", JSON.stringify(cart));
    renderCart(cart);
  }
};

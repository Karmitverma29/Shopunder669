function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
let token = getCookie("shopToken");
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  let mobile = document.getElementById("mno").value;
  let address = document.getElementById("address").value;
  let location = document.getElementById("location").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let pincode = document.getElementById("zip").value;

  if (
    address !== "" &&
    location !== "" &&
    city !== "" &&
    state !== "" &&
    pincode !== "" &&
    mno !== ""
  ) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let orderdate = `${day}-${month}-${year}`;
    const cartdata = JSON.parse(getCookie("shopCart"));
    const udata = JSON.parse(getCookie("shopUserData"));
    const price = JSON.parse(getCookie("shopPrice"));
    const pload = {
      address,
      location,
      city,
      state,
      pincode,
      orderdate,
      mobile,
      email: udata.email,
      name: udata.name,
      cartdata,
      price
    };
    fetch("https://energetic-pea-coat-dog.cyclic.app/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: token },
      body: JSON.stringify(pload),
    }).then(() => {
      fetch("https://energetic-pea-coat-dog.cyclic.app/cart/alldelete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", authorization: token },
      })
      .then(()=>{
        alert("Order placed");
        window.location.href="./index.html";
      })
      
    });
  } else {
    alert("Fill all fields");
  }
});

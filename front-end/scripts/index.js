import Navbar from "../Nav.js";
// import Footer from '../Footer.js'
// import Header from '../Header.js';
import OutNavbar from "../logoutNav.js";
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
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
let token = getCookie("shopToken");

if (token == "") {
  let nav = document.getElementById("navbar");
  nav.innerHTML = Navbar();
} else {
  let nav = document.getElementById("navbar");
  nav.innerHTML = OutNavbar();
}
// let head = document.getElementById('Header')
// head.innerHTML =Header();
// let container = document.getElementById('Footer')
//    container.innerHTML =Footer();
let results = document.getElementById("search-results");
document.getElementById("logout").addEventListener("click",()=>{
    setCookie("shopToken","",0);
    window.location.href="./login.html"
})
document.getElementById("search-btn").addEventListener("click", function (e) {
  e.preventDefault();
  let search = document.getElementById("search-input").value;
  fetch(`https://energetic-pea-coat-dog.cyclic.app/product?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("Searched_products", JSON.stringify(data));
      window.location.href = "./search.html";
    });

  console.log(search);
});

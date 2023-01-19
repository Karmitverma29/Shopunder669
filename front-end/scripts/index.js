import Navbar from "../Nav.js";
// import Footer from '../Footer.js'
// import Header from '../Header.js';

let nav=document.getElementById("navbar");
nav.innerHTML=Navbar();


    // let head = document.getElementById('Header')
    // head.innerHTML =Header();
    // let container = document.getElementById('Footer')
    //    container.innerHTML =Footer();
let results=document.getElementById("search-results");

document.getElementById("search-btn").addEventListener("click", function(e) {
    e.preventDefault();
    let search=document.getElementById("search-input").value;
    fetch(`https://energetic-pea-coat-dog.cyclic.app/product?search=${search}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        localStorage.setItem("Searched_products",JSON.stringify(data));
        window.location.href="./search.html"
    });
    
  console.log(search);
  });
  

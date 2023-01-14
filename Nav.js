
function Navbar(){
    return `
    <div class="top">
    <div class="search-container">
    <form>
      <input type="text" placeholder="Search..." id="search-input">
      <button type="submit" id="search-btn">Search</button>
    </form>
  </div>
    <div class=cred>
<button>Login</button>
<button>Signup</button>
 <a href="./cart.html"> <h2>Cart</h2> </a>


     </div>
    
</div>
    <div class="header">
       
    <a href="/index.html"> <h1>Shopunder669</h1> </a>
 </div>
 <div class="navbar">

     <!-- <div class="logo">
        <a href="./index.html"> <img src="./669.jpeg" alt="">
        </div>
     </a> -->
     <div class="categories">
        <a href="./Tshirts.html"> 
         <div>
<img src="./images/tshirts.jpg"/>
<h2>T-Shirts</h2>           
         </div>
           </a>
           <a href="./hoodies.html">
         <div>
<img src="./images/nightwear.jpg"/>
<h2>Night wear</h2>  
</div>
</a>
<a href="./pants.html">
         <div>
             <img src="./images/sweatshirts.jpg"/>
<h2>Sweatshirts</h2>
         </div>
     </a>
  <a href="./books.html">    <div>
             <img src="./images/books.jpg"/>
<h2>Books</h2>
         </div>
     </a>   
    <a href="./watches.html">   <div>
             <img src="./images/boxers.jpg"/>
<h2>Boxer's</h2>
         </div>
     </a>  
     <a href="./watches.html">   <div>
             <img src="./images/shorts.jpg"/>
<h2>Shorts</h2>
         </div>
     </a>  
     <a href="./caps.html">   <div>
     <img src="./images/caps.jpeg"/>
<h2>Caps</h2>
 </div>
</a>  
        
     </div>
     
 </div>
 
 `
}

export default Navbar;
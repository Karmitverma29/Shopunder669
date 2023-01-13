
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
<img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
<h2>T-Shirts</h2>           
         </div>
           </a>
           <a href="./hoodies.html">
         <div>
<img src="https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9vZGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
<h2>Hoodies</h2>  
</div>
</a>
<a href="./pants.html">
         <div>
             <img src="https://plus.unsplash.com/premium_photo-1663076093668-89e15a80156e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3dlYXRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<h2>Sweatshirts</h2>
         </div>
     </a>
  <a href="./books.html">    <div>
             <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<h2>Books</h2>
         </div>
     </a>   
    <a href="./watches.html">   <div>
             <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9taXplJTIwdCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
<h2>Custom</h2>
         </div>
     </a>  
        
     </div>
     
 </div>
 
 `
}

export default Navbar;
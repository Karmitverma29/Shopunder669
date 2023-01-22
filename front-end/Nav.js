
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
<button><a href="./login/login.html"> Signup<a/></button> 
<a href="./cart.html"><img src="data:image/png;base64,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" alt="cart"/></a>
 


     </div>
    
</div>
   
 
     
 </div>
 
 `
}

export default Navbar;



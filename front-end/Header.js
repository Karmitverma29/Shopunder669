function Header(){

    return ` <header>
    <nav>
        <ul class='nav-bar'>
           
            <input type='checkbox' id='check' />
            <span class="menu">
                <li><a href="./">Home</a></li>
                <li><a href="./allproducts.html">All Product</a></li>
                <li><a href="./">About</a></li>
                <li><a href="./caps.html">Caps</a></li>
                <li><a href="./books.html">Books</a></li>
                <li><a href="./watches.html">Boxer's</a></li>
                <li><a href="./Tshirts.html">Tshirts</a></li>
                <li><a href="./shorts.html">Shorts</a></li>
                <li><a href="./pants.html">Sweatshirts</a></li>
                <li><a href="./hoodies.html">Nightwear</a></li>

                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </span>
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </ul>
    </nav>
    </header>
`
}

export default Header;
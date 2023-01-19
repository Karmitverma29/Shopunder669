function Header(){

    return ` <header>
    <nav>
        <ul class='nav-bar'>
           
            <input type='checkbox' id='check' />
            <span class="menu">
                <li><a href="./">Home</a></li>
                <li><a href="./">Cart</a></li>
                <li><a href="./">About</a></li>
                <li><a href="./caps.html">Caps</a></li>
                <li><a href="./books.html">Books</a></li>
                <li><a href="./watches.html">Watches</a></li>
                <li><a href="./Tshirts.html">Tshirts</a></li>
                <li><a href="./shorts.html">Sorts</a></li>
                <li><a href="./pants.html">Pants</a></li>
                <li><a href="./hoodies.html">Hoodies</a></li>
                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </span>
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </ul>
    </nav>
    </header>
`
}

export default Header
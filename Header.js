function Header(){

    return ` <header>
    <nav>
        <ul class='nav-bar'>
           
            <input type='checkbox' id='check' />
            <span class="menu">
                <li><a href="./">Home</a></li>
                <li><a href="./">Cart</a></li>
                <li><a href="./">About</a></li>
                <li><a href="./front-end/caps.html">Caps</a></li>
                <li><a href="./front-end/books.html">Books</a></li>
                <li><a href="./front-end/watches.html">Watches</a></li>
                <li><a href="./front-end/Tshirts.html">Tshirts</a></li>
                <li><a href="./front-end/shorts.html">Sorts</a></li>
                <li><a href="./front-end/pants.html">Pants</a></li>
                <li><a href="./front-end/hoodies.html">Hoodies</a></li>
                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
            </span>
            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        </ul>
    </nav>
    </header>
`
}

export default Header
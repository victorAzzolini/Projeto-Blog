import "./header.css"

function Header() {
    return(
        <header className="header">
            <nav className="nav__bar container">
                <div className="logo__name">
                    <a href="/" className="logo__link">Lepetit.blog</a>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="/home" className="nav__link">Home</a>
                    </li>
                
                    <li className="nav__item">
                        <a href="/blog" className="nav__link">Blog</a>
                    </li>

                
                    <li className="nav__item">
                        <a href="/newText" className="nav__link">Novo Texto</a>
                    </li>
                
                    <li className="nav__item">
                        <a href="/contact" className="nav__link">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Header
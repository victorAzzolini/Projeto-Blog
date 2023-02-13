import {Link} from "react-router-dom"

import "./header.css"

function Header() {
    return(
        <header className="header">
            <nav className="nav__bar container">
                <div className="logo__name">
                    <Link to="/" className="logo__link">LEPETIT</Link>
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Blog</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/newPost" className="nav__link">Novo Post</Link>
                    </li>
                
                    <li className="nav__item">
                        <Link to="/contact" className="nav__link">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Header
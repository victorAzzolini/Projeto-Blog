import {Link} from "react-router-dom"
import { useEffect, useState } from "react"

import "./header.css"

function Header() {
    const [category, setCategory] = useState({})
    const [searchDiv, setSearchDiv] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/categories`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategory(data[0].name)
        })
        .catch(err => console.log(err))
    }, [])

    

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
                        <Link to={`/categories?=${category}`} className="nav__link">Categorias</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contact" className="nav__link">Contato</Link>
                    </li>
                    <li className="nav__item search">
                        <a onClick={() => setSearchDiv(!searchDiv)}>
                            <i className="uil uil-bars"></i>
                        </a> 
                    </li>
                </ul>
            </nav>
            {searchDiv && (
                <div className="search__space">
                    <div className="search__division"></div>
                    <form className="nav__search">
                        <input 
                        type="text" className="nav__search__input" placeholder="Buscar..."
                        />
                        <button type="submit" className="nav__search__icon">
                            <i className="uil uil-search"></i>
                        </button>
                    </form>     
                </div>
            )}
            
        </header>
    )
    
}

export default Header
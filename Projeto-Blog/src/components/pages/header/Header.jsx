import {Link, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"

import "./header.css"

function Header() {
    const [searchPosts, setSearchPosts] = useState()
    const [searchDiv, setSearchDiv] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://lepetit-json-server.vercel.app/categories`, {
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

    function handleChange(e) {
        e.preventDefault()
        setSearchPosts(e.target.value)
        console.log(searchPosts)
    }

    function submitSearch(e) {
        e.preventDefault()
        navigate(`/search?q=${searchPosts}`)
    }
    

    return(
        <header className="header">
            <nav className="nav__bar container">
                <div className="logo__name">
                    <Link to="/" className="logo__link">LEPETIT</Link>
                </div>
                <ul className="nav__list">
                    <li className="nav__item" key="0">
                        <Link to="/" className="nav__link">Blog</Link>
                    </li>
                    <li className="nav__item" key="1">
                        <Link to="/newPost" className="nav__link">Novo Post</Link>
                    </li>
                    <li className="nav__item" key="2">
                        <Link to={`/categories`} className="nav__link">Categorias</Link>
                    </li>
                    <li className="nav__item search" key="3">
                        <a onClick={() => setSearchDiv(!searchDiv)}>
                            <i className="uil uil-bars"></i>
                        </a> 
                    </li>
                </ul>
            </nav>
            {searchDiv && (
                <div className="search__space">
                    <div className="search__division"></div>
                    <form onSubmit={submitSearch} className="nav__search">
                        <input 
                        type="text" className="nav__search__input" placeholder="Buscar..."
                        onChange={handleChange}
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
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import "./blog.css"

import Posts from "../../posts/Posts"


function Blog() {
    const [searchPost, setSearchPost] = useState('')
    
    
    const navigate = useNavigate()

    function searchPosts(e){
        e.preventDefault()
        navigate(`search?q=${searchPost}`)
    } 

    function handleChange(e) {
        setSearchPost(e.target.value)
        console.log(searchPost)
    }   

    return (
        <section className="blog container grid">
            <div className="blog__content">
                <Posts />
            </div>
            <aside className="blog__aside">
                <form onSubmit={searchPosts} className="blog__search">
                    <input 
                        type="text" className="blog__search__input" placeholder="Buscar..."
                        onChange={handleChange} 
                    />
                    <button type="submit" className="blog__search__icon">
                        <i className="uil uil-search"></i>
                    </button>
                </form>
                <div className="blog__posts">Recent Posts</div>
            </aside>
        </section>
    )
}

export default Blog
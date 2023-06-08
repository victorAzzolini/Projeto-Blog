import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./blog.css"

import Posts from "../../posts/Posts"


function Blog() {
    const [searchPost, setSearchPost] = useState()
    const [recentPosts, setRecentesPosts] = useState([])
    
    console.log('oi')
    useEffect(() => {
        fetch('https://lepetit-json-server.vercel.app/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setRecentesPosts(data.reverse().slice(0, 7))
            console.log(recentPosts)
        })
        .catch(err => console.log(err))
    }, [])
    
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
                <div className="blog__posts">
                    <h3>Recent Posts</h3>
                    <div className="categories__division"></div>
                    {recentPosts.length > 0 && 
                        recentPosts.map((post) => (
                            <div key={post.id}>
                                <li key={post.id}>
                                    <a href={`/${post.id}`} >
                                        {post.title}
                                    </a>
                                </li>
                            </div> 
                        ))
                    }
                </div>
            </aside>
        </section>
    )
}

export default Blog
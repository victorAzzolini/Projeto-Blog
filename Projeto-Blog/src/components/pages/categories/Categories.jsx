import { useEffect, useState } from "react"
import Post from "../../posts/Post"


import "./categories.css"
import CategoriesAside from "./CategoriesAside"

function Categories() {
    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [category, setCategory] = useState("Programação")

    useEffect(()  => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Cotent-type': 'application/json'
            }
         })
         .then((resp) => resp.json())
         .then((data) => {
            setCategories(data)
         })
         .catch(err => console.log(err))
    },[])
         
    function getPosts(e) {
        
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPosts(data.filter((post) => post.category.name == category))     
        })
        .catch((err) => console.log(err))
    }

    function handleCategoryChange(e) {
        e.preventDefault()
        setCategory(e.target.text)
        getPosts()
        console.log(category)
    }

    return(
        <div className="categories__div">
            <div className="categories__container">
                {posts.length > 0 && (
                    posts.map((post) => (
                        <Post 
                            name={post.title}
                            text={post.text}
                            categorie={post.category.name}
                            img={post.img}
                            comments={post.comments}
                            id={post.id}
                            date={post.date}
                        />
                    ))
                )}
                
            </div>
            <aside>
                <CategoriesAside />
                <div className="categories__aside">
                    <h3>Categorias</h3>
                    <ul className="categories__list">
                        {categories.length > 0 && (
                            categories.map((category) => (
                                <>
                                    <li className="categories__item">
                                        <a
                                        onClick={handleCategoryChange}  
                                        href="/categories"
                                        key={category.id}
                                        id={category.id}
                                        >
                                            {category.name}
                                        </a>
                                        <a href="">
                                            <i className="uil uil-times-square"></i>
                                        </a>
                                    </li>
                                    <div className="categories__division"></div>
                                </>
                                
                                
                            ))
                        )}
                    </ul>
                </div> 
            </aside>
        </div>
        
    )
}

export default Categories
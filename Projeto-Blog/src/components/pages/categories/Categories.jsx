import { useEffect, useState } from "react"
import Post from "../../posts/Post"

import "./categories.css"

function Categories() {
    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [category, setCategory] = useState({})

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
        e.preventDefault()
        
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(category)
            setPosts(data.filter((post) => post.category.name == category))     
        })
        .catch((err) => console.log(err))
    }

    function handleCategoryChange(e) {
        setCategory(e.target.options[e.target.selectedIndex].text)
    }

    return(
        <div className="categories__div">
            <div className="categories__container">
            <form className="categories" onSubmit={getPosts}>
                <label htmlFor="categories">
                    Escolha uma Categoria:
                </label>
                <div className="categories__choose">
                <select 
                    className="create__post__categories"  
                    name="categories"
                    onChange={handleCategoryChange}
                >
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
                    <button type="submit">
                        <i className="uil uil-search"></i>
                    </button>
                </div>
            </form>
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
        </div>
        
    )
}

export default Categories
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Post from "../../posts/Post"

import "./search.css"

function Search() {
    const [posts, setPosts] = useState([])

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q");


    useEffect(() => {
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPosts(data.filter((post) => {
                return (post.text?.toLowerCase().includes(query?.toLocaleLowerCase()) || post.title?.toLocaleLowerCase().includes(query?.toLocaleLowerCase()))
            }))
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            {posts.length > 0 ? (  
                <div className="search__container">
                    
                    {posts.map((post) => (
                        
                        <Post 
                        name={post.title}
                        text={post.text}
                        categorie={post.category.name}
                        img={post.img}
                        comments={post.comments}
                        id={post.id}
                        date={post.date}
                    />
                    ))}
                </div>
            ): (
                <div className="search__container">
                    <h1>Nenhum resultado para a busca....</h1>
                </div>
            )}
        </div>
    )
}

export default Search
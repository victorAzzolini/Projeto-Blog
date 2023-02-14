import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./pagePost.css"

function PagePost() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [posts, setPosts] = useState({})
    const [category, setCategory] = useState({})
    const [alertMessage, setAlertMessage] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPost(data)
            setCategory(data.category)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPosts(data)
        })
    },[])

    function removePost() {
        console.log("hey")
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then(() => {
            setPosts(posts.filter((post) => {
                 post.id != id 
            }))
            //redirect
            navigate('/', {state: {
                message: "O Post foi removido com sucessi"
            }})
            
        })
        .catch(err => console.log(err))
    }

       return (
        <div className="page__post">
            <article className="post__container" key={post.id}>
                <div >
                    <img className="post__img" src={post.img} alt="cavalos" />
                </div>
                <h2 className="post__title">
                    {post.title}            
                </h2>
                <div className="post__information__content">
                    <ul className="post__information">
                        <li className="post__info calendar" key="0">
                            <i className="uil uil-calender post__icon"></i>
                            <a href="#" className="post-calendar">
                                {post.date}
                            </a>
                        </li>
                        <li className="post__info blog-writer" key="1">
                            <i className="uil uil-user post__icon"></i>
                            <a href="#" className="post-writer">
                                {category.name}
                            </a>
                        </li>
                        <li className="post__info comments " key="2">
                            <i className="uil uil-comments-alt post__icon"></i>
                            <a href="#" className="post-comments">
                               {post.id} Comentários 
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="post__division"></div>
                <div className="post__post">
                    <p>
                        {post.text}
                    </p>
                </div>
                <div className="post__buttons">
                    <button className="post__comments edit">
                        Editar 
                    </button>
                    <button className="post__comments">
                        Comentários
                    </button>
                    <button onClick={() => setAlertMessage(!alertMessage)} className="post__comments remove">
                        Remover Post
                    </button>
                </div>
            </article>
            {alertMessage && (
                <div className="post__alert__remove">
                <h2>Você tem ceterza que deseja remover o post?</h2>
                <div className="post__alert__buttons">
                    <button onClick={removePost}>Sim</button>
                    <button onClick={() => setAlertMessage(!alertMessage)}>Não</button>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default PagePost
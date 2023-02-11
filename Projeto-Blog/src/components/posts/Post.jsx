import { useEffect, useState } from "react";
import "./post.css"

function Post() {
    const [posts, setPosts] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPosts(data)
            console.log(posts)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="post__container">
            <div className="post__img">
                    <img src="" alt="" />
                </div>
                <h2 className="post__title">{posts.title}</h2>
                <div className="post__information__content">
                    <ul className="post__information">
                        <li className="post__info calendar">
                            <i className="uil uil-calender post__icon"></i>
                            <a href="#" className="post-calendar">
                                02/01/2022
                            </a>
                        </li>
                        <li className="post__info blog-writer">
                            <i className="uil uil-user post__icon"></i>
                            <a href="#" className="post-writer">
                                Escritor
                            </a>
                        </li>
                        <li className="post__info comments ">
                            <i className="uil uil-comments-alt post__icon"></i>
                            <a href="#" className="post-comments">
                                Comentários
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="post__division"></div>
                <div className="post__post">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat odit, libero rem omnis laboriosam reprehenderit quia ipsam quidem amet illo illum officiis soluta, ab repudiandae, cum beatae totam aperiam?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nam, velit dolore aliquam repellendus minima laborum. Quidem atque officiis dolore. Provident quia beatae quos cumque error delectus, culpa autem rem.
                    </p>
                </div>
                <button className="post__comments">
                    Comentários
                </button>
        </div>
                
    )
}

export default Post
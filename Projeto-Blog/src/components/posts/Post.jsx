import {Link} from "react-router-dom"

import "./post.css"

function Post({ name, text, categorie, img, date, id }) {
      
    return (
        <article className="post__container" key={id}>
            <div >
                <img className="post__img" src={img} alt="cavalos" />
            </div>
            <h2 className="post__title">
                <Link className="post__link" to={`/${id}`}>{name}</Link>            
            </h2>
                <div className="post__information__content">
                    <ul className="post__information">
                        <li className="post__info calendar" key="0">
                            <i className="uil uil-calender post__icon"></i>
                            <a href="#" className="post-calendar">
                                {date}
                            </a>
                        </li>
                        <li className="post__info blog-writer" key="1">
                            <i className="uil uil-user post__icon"></i>
                            <a href={`categories?q=${categorie}`} className="post-writer">
                                {categorie}
                            </a>
                        </li>
                        <li className="post__info comments " key="2">
                            <i className="uil uil-comments-alt post__icon"></i>
                            <a href="#" className="post-comments">
                               {id} Comentários 
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="post__division"></div>
                <div className="post__post">
                    <p>
                        {text}
                    </p>
                </div>
                <div className="post__buttons">
                    <button className="post__comments">
                        Comentários
                    </button>
                </div>
        </article>
    )
}

export default Post
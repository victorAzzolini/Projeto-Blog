import "./post.css"
import svg from "../../../src/assets/pexels-mehmet-turgut-kirkgoz-15118224.jpg" 

function Post({ name, text, categorie, img, date, id }) {
    const image = img

    console.log(image);

    


    return (
        <article className="post__container">
            <div >
                <img className="post__img" src={img} alt="cavalos" />
            </div>
            <h2 className="post__title">{name}</h2>
                <div className="post__information__content">
                    <ul className="post__information">
                        <li className="post__info calendar">
                            <i className="uil uil-calender post__icon"></i>
                            <a href="#" className="post-calendar">
                                {date}
                            </a>
                        </li>
                        <li className="post__info blog-writer">
                            <i className="uil uil-user post__icon"></i>
                            <a href="#" className="post-writer">
                                {categorie}
                            </a>
                        </li>
                        <li className="post__info comments ">
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
                <button className="post__comments">
                    Comentários
                </button>
        </article>
    )
}

export default Post
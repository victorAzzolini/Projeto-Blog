import "./blog.css"

function Blog() {
    return (
        <section className="blog container grid">
            <div className="blog__content">
                <div className="post__img">
                    <img src="" alt="" />
                </div>
                <h2 className="post__title">Title Post</h2>
                <div className="post__information__content">
                    <ul className="post__information">
                        <li className="post__info calendar">
                            <i class="uil uil-calender post__icon"></i>
                            02/01/2022
                        </li>
                        <li className="post__info blog-writer">
                            <i class="uil uil-user post__icon"></i>
                            Escritor
                        </li>
                        <li className="post__info comments ">
                            <i class="uil uil-comments-alt post__icon"></i>
                            Comentários
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
                <button className="post__coments">Comentários</button>
            </div>
            <aside className="blog__aside">
                <div className="blog__search">Search</div>
                <div className="blog__posts">Recent Posts</div>
            </aside>
        </section>
    )
}

export default Blog
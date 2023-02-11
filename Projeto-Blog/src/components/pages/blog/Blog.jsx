import "./blog.css"

import Post from "../../posts/Post"

function Blog() {
    return (
        <section className="blog container grid">
            <div className="blog__content">
                <Post />
            </div>
            <aside className="blog__aside">
                <div className="blog__search">Search</div>
                <div className="blog__posts">Recent Posts</div>
            </aside>
        </section>
    )
}

export default Blog
import "./blog.css"

import Posts from "../../posts/Posts"

function Blog() {
    return (
        <section className="blog container grid">
            <div className="blog__content">
                <Posts />
            </div>
            <aside className="blog__aside">
                <div className="blog__search">Search</div>
                <div className="blog__posts">Recent Posts</div>
            </aside>
        </section>
    )
}

export default Blog
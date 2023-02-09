import "./blog.css"

function Blog() {
    return (
        <section className="blog container grid">
            <div className="blog__content">
                post
            </div>
            <div className="blog__side_bar">
                <div className="blog__search">Search</div>
                <div className="blog__posts">Recent Posts</div>
            </div>
        </section>
    )
}

export default Blog
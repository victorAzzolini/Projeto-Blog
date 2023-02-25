import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

import Post from "../../posts/Post"

import image from "../../../assets/pexels-photo-117843.jpeg"
import "./categories.css"


function Categories() {
    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [category, setCategory] = useState({})
    const [change, setChange] = useState(false)
    const [alertMessage, setAlertMessage] = useState(false)
    const [identify, setIdentify] = useState(0)

    const navigate = useNavigate()
    const [useParams] = useSearchParams()
    const query =  useParams.get('q')

    useEffect(()  => {
        fetch('https://lepetit-json-server.vercel.app/categories', {
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
    },[change])

    useEffect(() => {
        fetch('https://lepetit-json-server.vercel.app/posts', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const postsLa = data.filter((post) => post.category.name == query)
            setPosts(postsLa.reverse())     
        })
        .catch((err) => console.log(err))
    },[query])
    


    function handleCategoryChange(e) {
        e.preventDefault()
        const targetText = e.target.text
        navigate(`/categories?q=${targetText}`)
    }

    function handleCreateCategory(e){
        setCategory({
                "name": e.target.value            
        })
        console.log(category)
    }

    function createCategory(e){
        e.preventDefault()

        fetch('https://lepetit-json-server.vercel.app/categories', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setChange(!change)
        })
        .catch(err => console.log(err))
    }

    function deleteCategory() {
        console.log(identify)

        fetch(`https://lepetit-json-server.vercel.app/categories/${identify}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(categories.filter((category) => {
                return category.id != identify
            }))
            setAlertMessage(!alertMessage)
        })
        .catch((err) => console.log(err))

    }

    function changeAlertMessage(e) {
        e.preventDefault()
        setAlertMessage(!alertMessage)
        setIdentify(e.target.id)
        console.log(identify)
    }
    
    return(
        <div className="categories__div">
            <div className="categories__container">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <Post 
                            name={post.title}
                            text={post.text}
                            categorie={post.category.name}
                            img={post.img}
                            comments={post.comments}
                            id={post.id}
                            date={post.date}
                            key={post.id}
                        />
                    ))
                ): (
                    <div className="categories__wait">
                        <Post 
                            name="Escolha uma Categoria"
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto hic saepe sit animi repellendus aut enim blanditiis mollitia? Aliquid deserunt, qui enim optio eos placeat vero! Rerum, excepturi mollitia."
                            categorie="categoria"
                            img={image}
                            comments="2"
                            date="today"
                            id=""
                        />
                    </div>
                )}
                
            </div>
            <aside>
                <div className="create__post__category-box">
                    <form 
                        onSubmit={createCategory}
                    >
                        <label htmlFor="category__box">
                            Adicione uma nova categoria:
                        </label>
                        <div    className="create__post__category-box__buttons"
                        >
                            <input 
                                type="text" 
                                name="category__box"
                                onChange={handleCreateCategory}
                            />
                            <button type="submit">
                                Adicionar
                            </button>
                        </div>        
                    </form>
                </div>
                <div className="categories__aside">
                    <h3>Categorias</h3>
                    <ul className="categories__list">
                        {categories.length > 0 && (
                            categories.map((category) => (
                                <div key={category.id}>
                                    <li className="categories__item">
                                        <a
                                        onClick={handleCategoryChange}  
                                        href="/categories"
                                        key={category.id}
                                        id={category.id}
                                        >
                                            {category.name}
                                        </a>
                                        <a 
                                            href=""
                                            onClick={changeAlertMessage}
                                        >
                                            <i className="uil uil-times-square"
                                            id={category.id}></i>
                                        </a>
                                    </li>
                                    <div className="categories__division"></div>
                                </div>
                                
                                
                            ))
                        )}
                    </ul>
                </div> 
            </aside>
            {alertMessage && (
                <div className="categories__alert__div">
                    <div className="categories__alert__remove">
                        <h2>Você tem ceterza que deseja remover a categoria?</h2>
                        <div className="categories__alert__buttons">
                            <button onClick={deleteCategory}>Sim</button>
                            <button onClick={() => setAlertMessage(!alertMessage)}>Não</button>
                        </div>
                    </div>
                </div> 
            )}
        </div>
    )
}

export default Categories
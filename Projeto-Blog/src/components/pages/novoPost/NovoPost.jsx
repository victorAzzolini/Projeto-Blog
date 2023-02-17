import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./novoPost.css"


function NovoPost() {
    const [categories, setCategories] = useState([])
    const [post, setPost] = useState({})
    const [categoryBox, setCategoryBox] = useState(false)

    const navigate = useNavigate()

    const timeElapsed = Date.now()
    const date = new Date(timeElapsed)

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))

        
    },[])

    function createPost(post) {

        post.date = date.toLocaleDateString()

        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/', { state: {
                message: "Post criado com sucesso"
            }})
        })
        .catch(err => console.log(err))
    }

    function handleChange(e) {
        setPost({...post, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setPost({
            ...post, 
            category: {
                "id": e.target.value,
                "name": e.target.options[e.target.selectedIndex].text
            }
        })
        console.log(post)
    }

    function submit(e) {
        e.preventDefault()
        createPost(post)
    }

    return (
        <div className="create__post">
            <h1 className="post__title">Crie um novo Post</h1>
            <form onSubmit={submit} className="create__post__form">
                <label htmlFor="title">Título do Post:</label>
                <input 
                    className="create__post__title" 
                    type="text" 
                    name="title" 
                    placeholder="Digite o título do Post"
                    onChange={handleChange}
                />
                <label htmlFor="text">Texto do Post:</label>
                <textarea 
                    className="create__post__text" 
                    type="text" 
                    name="text" 
                    placeholder="Digite seu Post..."
                    onChange={handleChange} 
                />
                <label htmlFor="title">Imagem do Post:</label>
                <input 
                    className="create__post__title" 
                    type="text" 
                    name="img" 
                    placeholder="Cole o link contendo a imagem Post"
                    onChange={handleChange}
                />
                <label htmlFor="categories">Categorias:</label>
                <select 
                    className="create__post__categories"  
                    name="categories"
                    onChange={handleCategory}
                >
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
                <div className="create__post__buttons">
                    <a type="text" onClick={() => setCategoryBox(!categoryBox)}>Nova Categoria</a>
                    <button type="submit">Criar Post</button>

                </div>
                {categoryBox && (
                    <form className="create__post__category-box">
                        <label htmlFor="category__box">
                            Adicione uma nova categoria:
                        </label>
                        <div className="create__post__category-box__buttons">
                            <input type="text" name="category__box"/>
                            <button type="submit">
                            Adicionar
                            </button>
                        </div>
                        
                    </form>
                )}
            </form>
                
                    
        </div>
    )
}

export default NovoPost
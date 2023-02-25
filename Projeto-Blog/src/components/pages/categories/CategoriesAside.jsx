import { useState } from "react"

import "./categoriesAside.css"

function CategoriesAside() {
    const [category, setCategory] = useState({})


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
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="create__post__category-box">
            <form 
                
                onSubmit={createCategory}
            >
                <label htmlFor="category__box">
                    Adicione uma nova categoria:
                </label>
                <div className="create__post__category-box__buttons">
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
    )

}

export default CategoriesAside
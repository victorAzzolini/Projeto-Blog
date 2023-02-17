import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css'
import Header from './components/pages/header/Header'
import Home from './components/pages/home/Home'
import Blog from './components/pages/blog/Blog'
import NovoPost from "./components/pages/novoPost/NovoPost"
import Categories from "./components/pages/categories/Categories"
import Contato from "./components/pages/contact/Contact"
import PagePost from "./components/posts/PagePost"

function App() {

  return (
      <Router>
        <Header/>
        <Home/>
          <Routes>
            <Route exact path="/" element={<Blog />}/>
            <Route path="/newPost" element={<NovoPost />}/>
            <Route path="/categories" element={<Categories />}/>
            <Route path="/contact" element={<Contato />}/>
            <Route path="/:id" element={<PagePost />}/>
          </Routes>
      </Router>
  )
}

export default App

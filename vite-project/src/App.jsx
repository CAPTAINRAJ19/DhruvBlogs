import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Blogs from "./page/Blogs";
import Post from "./page/Post";
import './App.css';

function App() {


  return (
    <>
    <Router>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/post' element={<Post/>}/>
    <Route path='*' element={<h1>Error 404 Page not found</h1>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App

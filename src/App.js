import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
//import
import './App.css';

import Home from "../src/pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { useNavigate } from 'react-router-dom'
function App() {
  const [isAuth,setIsAuth] = useState(false)
  // const navigater = useNavigate()


  const signUserout = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      // navigater("/login")
      window.location.pathname ="/login"
    })
  }

  return (

      <Router>
        <nav>
          <Link to="/" >Home</Link>
          
          
          {!isAuth ?<Link to="/login" >Login</Link> 
          : <div>
            <button onClick={signUserout}>Log Out</button>
            <Link to="/createPost" >Crear Post</Link>
          </div>
          }
          
        </nav>
        <Routes>

          <Route path="/" element={<Home isAuth={isAuth}/>} />
          <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>} />
          <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        </Routes>
      </Router>

  );
}

export default App;

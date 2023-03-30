import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Post from "./pages/post/Post";

function App() {
  const [user, setUser] =useState(false) ;

  useEffect(()=> {
    const getUser = ()=> {
      fetch('http://localhost:5050/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: { 
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "http://localhost:3000"

        }
      })
      .then((response)=> {
        if (response.status === 200) return response.json()
        throw new Error('Authentication has been failed')
      })
      .then((resObject)=> {
        setUser(resObject.user);
      })
      .catch((err)=> {
        console.log(err)
      });
    }
    getUser();
  }, [])

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/post/:id' element={user ? <Post /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

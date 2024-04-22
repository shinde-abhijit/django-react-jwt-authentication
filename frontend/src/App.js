import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProtectedRoutes from './components/ProtectedRoutes';
import Navbar from './components/Navbar/Navbar';
import Todo from './components/Todos/Todo';


function Logout(){
    localStorage.clear()
    return <Navigate to="/login" />
}

function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
}


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar isAuthenticated={true}  />
      <Routes>
        <Route 
          path="/"
          element={<ProtectedRoutes><Home /></ProtectedRoutes>}
        />
        <Route 
          path="/login"
          element={<Login />}
        />
        <Route 
          path="/logout"
          element={<Logout />}
        />
        <Route 
          path="/register"
          element={<Register />}
        />
        <Route 
          path="/todo"
          element={<ProtectedRoutes><Todo /></ProtectedRoutes>}
        />
        <Route 
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

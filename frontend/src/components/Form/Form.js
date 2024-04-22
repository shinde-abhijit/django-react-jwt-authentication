import React, { useState } from 'react'
import api from '../../api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants'
import { useNavigate } from 'react-router-dom'
import "./Form.css"

const Form = ({route, method}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const navigate = useNavigate()
    const name = method === 'login' ? "Login" : "Register"
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try{
            const res = await api.post(route, {username, password})
            if(method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            }else{
                navigate("/login");
            }
        }catch(error){
            alert(error);
        }finally{
            setLoading(false);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className='form-container'>
                <h1>{name}</h1>
                <hr />
                <input 
                    type="text"
                    className='form-control form-input'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />
                <input 
                    type="password"
                    className='form-control form-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button className='form-button' type="submit">{name}</button>
            </form>
        </div>
    )
}

export default Form

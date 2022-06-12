import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
         .then(res => {
             alert(res.data.message)
             setLoginUser(res.data.user)
             history('/student')
            })
    }

    return(
        <div className="main">

            <div>
            <img src={require('./logo.png')} alt="Logo" />
            <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history("/register")}>Register</div>
            </div>

            </div>

            <div><img className='bgimg' src={require('./bg.png')} alt="Logo" /></div>

           
        </div>
        
    )
}

export default Login
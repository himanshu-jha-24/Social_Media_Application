import { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import { LinearProgress } from '@mui/material'

export default function Login() {
    const email=useRef()
    const password=useRef()
    const {user,isFetching,error,dispatch}=useContext(AuthContext)

    const handleClick=(e)=>{
        e.preventDefault()
        loginCall(
            {email:email.current.value,password:password.current.value},dispatch)
    }
    console.log(user)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    iConnect
                </h3>
                <span className="loginDesc">
                    Connect with friends and the world through this Social Media
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" className="loginInput" ref={email} required/>
                    <input placeholder="Password" 
                    type="password" className="loginInput" 
                    ref={password} minLength="6" required/>
                    <button className="loginButton" disabled={isFetching}>{isFetching? <LinearProgress/>:"Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">{isFetching? <LinearProgress/>:"Create a New Account"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

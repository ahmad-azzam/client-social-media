import React from "react";
import './Login.css'

export default function Login() {
    return (
        <>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Social App</h3>
                        <span className="loginDesc">
                            Connect with friend and the world around you on Social App
                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input type="email" placeholder="Enter Your Email ..." className="loginInput" />
                            <input type="password" placeholder="Enter Your Password ..." className="loginInput" />
                            <button className="loginButton">Login</button>
                            <span className="loginForgot">Forgot Password ?</span>
                            <button className="loginRegisterButton">Create a new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
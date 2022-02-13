import React from "react";
import './Register.css'

export default function Register() {
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
                            <input type="text" placeholder="Enter Your Username ..." className="loginInput" />
                            <input type="email" placeholder="Enter Your Email ..." className="loginInput" />
                            <input type="password" placeholder="Enter Your Password ..." className="loginInput" />
                            <input type="password" placeholder="Enter Your Password Again ..." className="loginInput" />
                            <button className="loginButton">Register</button>
                            <button className="loginRegisterButton">
                                I have account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
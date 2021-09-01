//imports
import React,{useState} from 'react'

//assets
import './css/Login.css'
import amazonLogo from "./icons/amazon.png"
import treeImage from './icons/tree.png'
import facebookIcon from './icons/fb.png'
import googleIcon from './icons/google.png'
import errorIcon from './icons/error.svg'

const Login = () => {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const handleEmailInput = (e) =>{
        setEmail(e.target.value)
    }
    const validateEmail = () =>{
        if(!email){
            setEmailError("The email field is required")
        }else{
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(email).toLowerCase())){
                setEmailError("The email address is not valid")
            }
        }
    }

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const handlePasswordInput = (e) =>{
        setPassword(e.target.value)
    }
    const validatePassword = () =>{
        if(!password){
            setPasswordError("The password field is required")
        }else{
            const re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if(!re.test(password)){
                setPasswordError("Try a strong password")
            }
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        validateEmail()
        validatePassword()
    }

    return (
        <div className="login__page">
            <div className="banner__image"></div>
            <div className="login__card__div">
                <div className="login__card">
                    <div className="login__card__top">
                        <img src={amazonLogo} alt="logo" className="top__logo" />
                    </div>
                    <h2 className="login__title">Login</h2>
                    <img src={treeImage} alt="tree" className="tree__image"/>
                    <form className="login__form" onSubmit={handleSubmit}>
                        <div className="input__group">
                            <input type="text" placeholder="Email" onChange={handleEmailInput} />
                                {emailError && 
                                    <div className="input__error">
                                        <img src={errorIcon} alt=""/>
                                        <div className="input__error__text">{emailError}</div>
                                    </div>
                                }
                            
                        </div>
                        <div className="input__group">
                            <input type="password" placeholder="Password" onChange={handlePasswordInput}/>
                            <div className="input__error">
                                {passwordError && 
                                    <div className="input__error">
                                        <img src={errorIcon} alt=""/>
                                        <div className="input__error__text">{passwordError}</div>
                                    </div>
                                }
                            </div>
                        </div>
                        <button className="signin__btn">Sign In</button>
                    </form>
                    <div className="other__btns">
                        <div className="forgot__pass__btn">Forgot Password?</div>
                        <div className="signup__btn">New User? Sign Up</div>
                    </div>
                    <div className="orText">or</div>
                    <div className="third__party__logins">
                        <div className="tpl__btn google__btn">
                            <div className="tpl__icon">
                                <img src={googleIcon} alt="" />
                            </div>
                            <div className="tpl__text">Continue with Google</div>
                        </div>
                        <div className="tpl__btn fb__btn">
                            <div className="tpl__icon">
                                <img src={facebookIcon} alt="" />
                            </div>
                            <div className="tpl__text">Continue with Facebook</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

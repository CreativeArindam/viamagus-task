//imports
import React,{useState} from 'react'

//assets
import './css/Login.css'
import amazonLogo from "./icons/amazon.png"
import treeImage from './icons/tree.png'
import facebookIcon from './icons/fb.png'
import googleIcon from './icons/google.png'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <input type="text" placeholder="Email" onChange={e=> setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={e=> setEmail(e.target.value)}/>
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

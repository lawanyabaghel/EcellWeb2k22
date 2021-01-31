import React, { useState } from 'react'
import './authModal.css'
const AuthModal = ({ closeModal, modalOpen }) => {
    const showHideClassName = modalOpen ? "display-block" : "display-none"
    const [login, setlogin] = useState(true)
    const  rightPanelActive = login ? 'right-panel-active' : '';
    const SignUpModal = () => {
        return (
            <>
                <div class={`container ${rightPanelActive}`} id="container">
                    <div class="form-container sign-up-container">
                        <form className="ls-form" action="#">
                            <h1 className="ls-heading">Create Account</h1>
                            <span className="sub-text">or use your email for registration</span>
                            <input className="auth-input" type="text" placeholder="Name" />
                            <input className="auth-input" type="email" placeholder="Email" />
                            <input className="auth-input" type="password" placeholder="Password" />
                            <button className="ls-button">Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form className="ls-form" action="#">
                            <h1 className="ls-heading">Sign in</h1>
                            <span className="sub-text">or use your account</span>
                            <input className="auth-input" type="email" placeholder="Email" />
                            <input className="auth-input" type="password" placeholder="Password" />
                            <a className="ls-fpassword">Forgot your password?</a>
                            <button className="ls-button">Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with your personal info
                                    </p>
                                <button onClick={(e) => {e.preventDefault(); setlogin(false)}} className="ghost ls-button" id="signIn">Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={(e) => {e.preventDefault(); setlogin(true)}} className="ghost ls-button" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className={`ls-modal ${showHideClassName}`}>
            <div className="ls-modal-content">
                {SignUpModal()}
            </div>
        </div>
    )
}

export default AuthModal

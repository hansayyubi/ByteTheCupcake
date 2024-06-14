import React, {useState} from 'react'
import "../page/css/login_page_css/main_style.css"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Login = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
            email: email,
            password: password,
            })
            navigate.push("/client/src/page/landing-page.jsx");
            } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
            }
        }
    return (
        <>
            {/* html for navgation bar here */}
            <div>
                <div className="container-loginPage">
                    {/* left img container */}
                    <div className="left-container">
                        <img src="../public/img/login_page/bg2.png" alt="" />
                    </div>
                    {/* right form container */}
                    <div className="right-container">
                        {/* Login form */}
                        <div className="container-form">
                            <div className="logo-div">
                                <img src="../public/img/logo.png" alt="" />
                            </div>
                            <div className="container-btn">
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        const credentialResponseDecoded = jwtDecode(
                                            credentialResponse.credential
                                        );
                                        console.log(credentialResponseDecoded);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </div>
                            <p style={{textAlign: "center", paddingTop: "2%"}}>Already have an account? <b>Login with Email!</b></p>
                            <form onSubmit={Login} action="submit.php" method="POST">
                                <p className='text-center'> {msg} </p>
                                <div className="form-group">
                                    <label htmlFor="email">Email or username</label>
                                    <input className='input-label' type="email" id="email" name="email" placeholder='Email or username' required value={email} onChange={(e) => setEmail (e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input className='input-label' type="password" id="password" name="password" placeholder='Password' required value={email} onChange={(e) => setPassword (e.target.value)}/>
                                </div>
                                {/* form item */}
                                <div className="form-link">
                                    <div className="form-item">
                                        <a className="form-linkin" aria-current="page" href="#"style={{fontWeight:""}}>Forgot your password?</a>
                                    </div>
                                </div>
                                <center>
                                    <a href='./landing-page'>
                                        <button  className='btn btn-dark' type='button'>
                                            Click to Warp Jump!
                                            <span className="material-symbols-outlined">rocket_launch</span>
                                        </button>
                                    </a>
                                </center>
                            </form>
                            <hr className="hr-text gradient" data-content="or login with your account"/>
                            {/* signup button here */}
                            <p style={{textAlign: "center"}}>Don&apos;t have an account? you can <a href="./register-page" style={{fontWeight: "bold"}}>sign up here!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;
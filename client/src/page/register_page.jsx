import "../page/css/register_page_css/register_page_main.css";
import "../component/CSS/buttoncustom.css";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import react, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const RegisterPage = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword:  confPassword
      })
      navigate.push("/client/src/page/login_page.jsx");
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
        <div className="container-primary-registration">
          <div className='nav'>
            <a href="./login-page" className='backButton'>
              <span className="material-symbols-outlined">
                arrow_back_ios
              </span> 
            </a>
          </div>
          {/* right form container */}
          
          <div className="right-container">
            {/* Login form */}
            <div className="container-form">
              {/* <div className="logo-div">
                <h2 style={{fontSize: "40px", fontWeight: "bold"}}>SIGN YOU UP!</h2>
              </div> */}
              <div className="container-btn googleButtonLogin">
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
              <p style={{textAlign: "center", paddingTop: "2%", fontSize: "12px"}}>Tired to input you personal data? <b>Login with your Gmail!</b></p>
              <hr />
              <p style={{fontSize: "20px", fontWeight: "", textAlign: "center"}}>Sign to get <b>Cupcakes</b>.</p>
              <p className="text-align-center">{msg}</p>
              <form onSubmit={Register}>
                <div className="form-group">
                  <label htmlFor="fullname">Your Name</label>
                  <input className='input-label' type="text" id="fname" name="fname" placeholder='Your name here..' required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input className='input-label' type="text" id="username" name="username" placeholder='Your username here..' required value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className='input-label' type="email" id="email" name="email" placeholder='Your email here..' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input className='input-label' type="password" id="password" name="password" placeholder='Your password here..' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="retype-password">Make sure your password!</label>
                  <input className='input-label' type="password" id="password" name="password" placeholder='Retype password' required value={confPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                {/* form item */}
                <div className="form-link">
                  <div className="form-item">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                    <label className="form-check-label" htmlFor="exampleCheck1" style={{fontSize: ""}}>I agree with the <a className="form-linkin" aria-current="page" href="#"style={{fontWeight:"bold"}}>Term and Condition</a>.</label>
                  </div>
                </div>
                <center>
                  <div>
                    <button  className='btn btn-dark' type='submit'>
                      Start your Journey!
                      <span className="material-symbols-outlined">flag</span>
                    </button>
                  </div>
                </center>
              </form>
            </div>
          </div>
          {/* left img container */}
          <div className="left-container">
            <img src="../public/img/login_page/bg2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
export default RegisterPage;
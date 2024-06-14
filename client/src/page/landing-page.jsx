    import React, {useState, useEffect} from "react";
    import "../page/css/landing_page_main/style.css"
    import Slider from "../component/slider.jsx"
    import Navbar from "../component/Navbar.jsx"
    import InterestPage from "../component/interest.jsx"
    import axios from "axios";
    import { jwtDecode } from "jwt-decode";
    import {useNavigate} from "react-router-dom";

    const LandingPage = () => {
        const [name, setName] = useState('');
        const [token, setToken] = useState('');
        const [expire, setExpire] = useState('');
        const navigate = useNavigate();

        useEffect(() => {
            refreshToken();
        }, ['']);

        const refreshToken = async () => {
            try {
                const response = await axios.get('https://localhost:5000/token')
                setToken(response.data.accessToken);
                const decoded = jwtDecode(response.data.accessToken);
                setName(decoded.name);
                setExpire(decoded.exp);
            } catch (error) {
                if(error.response){
                    navigate.push("/client/src/page/login_page.jsx")
                }
            }
        }
        const getUsers = async () => {
            const response = await axios.get('https://localhost:5000/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
        }
        return (
        <>

        <div className="body-landingPage">
            {/* Navbar call out React */}
            {/* <div className="justify-content-between d-flex m-3 fixed-top" value="">
                <h1 className="">
                    Welcome!! {name}
                </h1>
                <button onClick={getUsers}>
                    Get User
                </button>
                <button>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div> */}
            <Navbar />
            {/* <!-- carousel --> */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="boxShadow-container">
                            <div className="carousel-caption d-none d-md-block">
                                <h6>Wuthering Wave</h6>
                                <small>an odyssey where, amidst the echoes of a world ravaged by the Lament, you rise as Rover, a voyager on a sea of forgotten memories, to rewrite the future alongside vibrant companions</small>
                            </div>
                        </div>
                        <img src="/img/carousel/img_1.jpg" className="d-block w-100 image-child" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <div className="boxShadow-container">
                            <div className="carousel-caption d-none d-md-block">
                                <h6><a href="" style={{color: "white"}}>Illustration by void_0</a></h6>
                                <small>The sky, a canvas vast and wide, ablaze with colors, deep inside.</small>
                            </div>
                        </div>
                        <img src="/img/carousel/img_2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <div className="boxShadow-container">
                            <div className="carousel-caption d-none d-md-block">
                                <h6>
                                    <a style={{color: "rgb(255, 255, 255)"}} href="https://www.pixiv.net/en/artworks/64495434" target="_blank" rel="noreferrer">Illustration by Rella</a>
                                </h6>
                                <small>Inky darkness gently drapes the world, a canvas for starlight&apos;s shimmering dance.</small>
                            </div>
                        </div>
                        <img src="/img/carousel/img_3.png" className="d-block w-100 image-child" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <div className="boxShadow-container">
                            <div className="carousel-caption d-none d-md-block">
                                <h6>Art by miv4t</h6>
                                <small>the eiyuu no oo.</small>
                            </div>
                        </div>
                        <img src="/img/carousel/img_4.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <div className="boxShadow-container">
                            <div className="carousel-caption d-none d-md-block">
                                <h6>Art by mocha</h6>
                                <small>Some representative placeholder content for the third slide.</small>
                            </div>
                        </div>
                        <img src="/img/carousel/img_5.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <div className="boxShadow-container">
                            <div className="carousel-caption d-none d-md-block">
                                <h6>Art by mocha</h6>
                                <small>Some representative placeholder content for the third slide.</small>
                            </div>
                        </div>
                        <img src="/img/carousel/img_6.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <div className="boxShadow-container">
                            <div className="carousel-caption d-none d-md-block">
                                <h6>Art by mocha</h6>
                                <small>Some representative placeholder content for the third slide.</small>
                            </div>dfasfasfafa
                        </div>
                        <img src="/img/carousel/img_7.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
                {/* <!-- button center  --> */}
                <div id="top" className="container-buttoncenter">
                    <button className="btn btn-light btn-lg">
                        <a href="#slider">START YOUR JOURNEY!</a>
                    </button>
                </div>
                
            </div>
            {/* Slider call out */}
            <Slider/>
            {/* Interest Call Out<!-- interest --> */}
            <InterestPage/>
            <hr/>
            {/* <!-- FAQ here --> */}
            <div className="container-faq mt-lg-5">
                <p className="title mt-4"><b>What they discuss about us!</b></p>
                <div className="container mt-4">
                    <div className="card mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                        <h6 className="card-subtitle mb-2">Bestie!</h6>
                        <p className="card-text">&quot;I was so impressed with the quality of the illustrations that I received from this company. They were able to perfectly capture the vision that I had for my website, and the illustrations were delivered on time and within budget.&quot;</p>
                        <p><b>Hans Ayyubi, CEO of Ayyubi Group</b></p>
                        </div>
                    </div>
                    <div className="card mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                        <h6 className="card-subtitle mb-2">First Encounter!</h6>
                        <p className="card-text">&quot;This website illustration product is a game-changer for my business. It has helped me to create a more engaging and visually appealing website that has resulted in a significant increase in conversions.&quot;</p>
                        <p><b>Enola Holmes, Denmark</b></p>
                        </div>
                    </div>
                    <div className="card mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                        <h6 className="card-subtitle mb-2">Never Look Around!</h6>
                        <p className="card-text">&quot;This website illustration product is a must-have for any business that wants to make a strong first impression online. The illustrations are professional and eye-catching, and they really help to set my website apart from the competition.&quot;</p>
                        <p><b>Mary Brown, Web Designer</b></p>
                        </div>
                    </div>
                    <div className="card mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                        <h6 className="card-subtitle mb-2">Most Loyal!</h6>
                        <p className="card-text">&quot;I am so glad that I decided to use this website illustration product. It has made a huge difference in the way that my website looks and feels, and I have received so many compliments from my clients.&quot;</p>
                        <p><b>David Miller, Business Owner</b></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Box for input email --> */}
            <div className="container-useremail">
                <div className="container-item1">
                    <img className="img-bg" src="/img/assets/img/bg_user-email.jpeg" alt=""/>
                </div>
                <div className="container-item2">
                    <h2>Fill This Void</h2>
                    <p>Never Miss Anything About Art and Trending!</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your email here!" aria-label="Cari" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-light" type="button">Cari</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- footer --> */}
            <footer className="bg-light text-dark">
                <div className="container text-start text-md-left">
                    <div className="row text-start text-md-left">
                        <div className="col-md-3 col-lg-3 col-xl-3 mt-3">
                            <img src="/img/nv-footer/logo.png" alt="logo" />
                        </div>
                        <div className="col-md-8 col-lg-8 col-xl-8 mt-3">
                            <a className="fw-semibold mx-lg-2 text-dark halaman" href="#">Home</a>
                            <a className="fw-semibold mx-lg-2 text-dark halaman" href="#">Gallery</a>
                            <a className="fw-semibold mx-lg-2 text-dark halaman" href="#">About Us</a>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 mt-3">
                            <a href="#"><i className="bi bi-instagram text-dark"></i></a>
                            <a href="#"><i className="bi bi-facebook text-dark ms-1"></i></a>
                            <a href="#"><i className="bi bi-twitter text-dark ms-1"></i></a>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-md-8 col-lg-9">
                            <p className="isi-font">©2024 ByteTheCupcake/FinalProject</p>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <p className="isi-font">Support: 
                                <a href="#" className="isi-font">bytethecupcake@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous">            
            </script>
        </div>
        </>
        )
    }
    export default LandingPage;
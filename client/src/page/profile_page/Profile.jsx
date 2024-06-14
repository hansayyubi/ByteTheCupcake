import Navbar from "../../component/Navbar";
import "../../component/CSS/Style.css";
const Profile = () => {
    return (
        <>
            <Navbar/>
            <section>
                <div className="hero text-dark">
                    <div className="container mt-5">
                        <div className="jumbotron d-flex justify-content-center">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-xl-2 ">
                                        <img src="image/user1.jpg" className=" rounded-center rounded-circle profile-img"alt="..."/>
                                    </div>
                                    <div className="col-xl-10">
                                        <div className="card-body text-center">
                                            <p className="card-title ms-5" style={{ fontSize: "30px" }}>Semenjana Sasmaya</p>
                                            <a href="./profile-edit">
                                                <button type="button" className="btn btn-outline-dark ms-5 " style={{ borderRadius: "50px" }}>Edit Profile</button>
                                            </a>
                                            <a href="">
                                                <button type="button"className="btn btn-outline-dark ms-2 rounded-circle "style={{ width:"fit-content",borderRadius:"100%" }}>
                                                    <i className="bi bi-three-dots"></i>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-start">
                            <a href="/Profile"><button type="button"className="btn button-black me-3"style={{ borderRadius: "50px" }}>Wishlist</button></a>
                            <a href="./profile-about"><button type="button"className="btn btn-outline-dark"style={{ borderRadius: "50px" }}>About</button></a>
                        </div>
                        <hr />
                        <section id="project">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 mb-5">
                                        <div className="card"style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile1.png"className="card-img-top"alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend1.png"alt="..."style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1"style={{ fontSize: "12px", fontWeight: "500" }}>Jeremy Limanto</small>
                                                        <small className="ps-2" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card"style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile2.png"className="card-img-top"alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend2.png"  alt="..."  style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Dan Nill A</small>
                                                        <small className="ps-2" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile3.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend3.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Nobi Kawarumon</small>
                                                        <small
                                                            className="ps-1"
                                                            style={{ fontSize: "10px", color: "#B8B8B8" }}
                                                        >
                                                            <i className="bi bi-heart-fill ps-1">
                                                                <small className="ps-1">45</small>
                                                            </i>
                                                            <i className="bi bi-eye-fill ps-1">
                                                                <small className="ps-1">120</small>
                                                            </i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile4.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend4.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Samuel San</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile5.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend1.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Jeremy Limanto</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile6.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend2.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Dan Nill A</small>
                                                        <small className="ps-1"style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile7.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend3.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Nobi Kawarumon</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile8.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend4.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Samuel San</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="project">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 mb-5">
                                        <div className="card"style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile1.png"className="card-img-top"alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend1.png"alt="..."style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1"style={{ fontSize: "12px", fontWeight: "500" }}>Jeremy Limanto</small>
                                                        <small className="ps-2" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card"style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile2.png"className="card-img-top"alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend2.png"  alt="..."  style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Dan Nill A</small>
                                                        <small className="ps-2" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile3.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend3.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Nobi Kawarumon</small>
                                                        <small
                                                            className="ps-1"
                                                            style={{ fontSize: "10px", color: "#B8B8B8" }}
                                                        >
                                                            <i className="bi bi-heart-fill ps-1">
                                                                <small className="ps-1">45</small>
                                                            </i>
                                                            <i className="bi bi-eye-fill ps-1">
                                                                <small className="ps-1">120</small>
                                                            </i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile4.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend4.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Samuel San</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile5.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend1.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Jeremy Limanto</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile6.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend2.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Dan Nill A</small>
                                                        <small className="ps-1"style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile7.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend3.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Nobi Kawarumon</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{ border: "none", backgroundColor: "transparent" }}>
                                            <img src="image/karya-profile8.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="image/friend4.png" alt="..." style={{ width: "25px" }}/>
                                                    </div>
                                                    <div className="col-10 ms-2">
                                                        <small className="pe-1" style={{ fontSize: "12px", fontWeight: "500" }}>Samuel San</small>
                                                        <small className="ps-1" style={{ fontSize: "10px", color: "#B8B8B8" }}>
                                                            <i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i>
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Profile;


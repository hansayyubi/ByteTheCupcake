// import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import "../component/CSS/Style.css"

export default function Gallery() {
    return (
        <>
        <Navbar/>
        {/* <!-- Isi konten --> */}
            <section>
                <div className="hero d-flex bg-light text-dark">
                    <div className="container bg-light">
                        <div className="jumbotron d-flex justify-content-center mt-3">
                            <div className="btn-group" role="group" aria-label="Basic example" style={{ width: "90%"}} >
                                <button type="button" className="btn btn-gallery" style={{backgroundColor: "#F5F5F5"}}>Trending</button>
                                <button type="button" className="btn btn-gallery" >Pop Art</button>
                                <button type="button" className="btn btn-gallery" >Flowers</button>
                                <button type="button" className="btn btn-gallery" >3D Design</button>
                                <button type="button" className="btn btn-gallery" >Illustration</button>
                                <button type="button" className="btn btn-gallery" >Pixel Art</button>
                                <button type="button" className="btn btn-gallery" >Web Design</button>
                            </div>
                        </div>
                        {/* <!-- Karya seni Project --> */}
                        <section id="project">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile1.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend1.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Jeremy Limanto</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile2.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend2.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Dan Nill A</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile3.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend3.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Nobi Kawarumon</small>
                                                            <small className="ps-1" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile4.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend4.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Samuel San</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile9.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend1.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Jeremy Limanto</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile10.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend2.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Dan Nill A</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile11.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend3.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Nobi Kawarumon</small>
                                                            <small className="ps-1" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile12.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend4.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Samuel San</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile5.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend1.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Jeremy Limanto</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile6.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend2.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Dan Nill A</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile7.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend3.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Nobi Kawarumon</small>
                                                            <small className="ps-1" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile8.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend4.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Samuel San</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile13.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend1.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Jeremy Limanto</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile14.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend2.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Dan Nill A</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile15.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend3.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Nobi Kawarumon</small>
                                                            <small className="ps-1" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mb-5">
                                        <div className="card" style={{border: "none", backgroundColor: "transparent"}}>
                                            <img src="image/karya-profile16.png" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="image/friend4.png" alt="..." style={{ width: "25px"}} />
                                                        </div>
                                                        <div className="col-10 ms-2">
                                                            <small className="pe-1" style={{fontSize: "12px", fontWeight: "500"}}>Samuel San</small>
                                                            <small className="ps-2" style={{fontSize: "10px", color:"#B8B8B8"}}><i className="bi bi-heart-fill ps-1"><small className="ps-1">45</small></i>
                                                            <i className="bi bi-eye-fill ps-1"><small className="ps-1">120</small></i></small>
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
        {/* // <!-- akhir Isi konten --> */}
        <Footer/>
        </>
    )
}

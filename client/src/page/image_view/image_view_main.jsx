import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
//CSS
import "../../page/image_view/css/image_view_main.css";
const ImageView = () => {
    return (
        <>
        <div>
            <Navbar/>
                {/* <!-- Content --> */}
                <div className="container">
                    <div className="container p-5 m-5 ">
                        <h1 className="fw-bold mb-5">
                            Shoap 3D
                        </h1>
                        <div className="d-flex justify-content-between mb-5">
                            <div className="d-flex align-items-center">
                                <img src="../../../public/img/image_view/profile.png" width="60px"/>
                                <h4>Jeremy Limanto<br/><span><font color="green">.available for work</font>  follow</span></h4>
                            </div>
                            <div>
                                <i className="bi bi-heart-fill border rounded-5"></i>
                                <i className="bi bi-bookmark-fill border rounded-5"></i>
                                <button className="btn btn-dark rounded-5">Get in touch</button>  
                            </div>
                        </div>
                        {/* <!-- Gambar Mobil --> */}
                        <div className="text-center mb-5">
                            <img src="../../../public/img/image_view/mobil.png" style={{borderRadius: "10px", width: "100%"}}/>
                        </div>
                        <div className="text-center mb-5">
                            <img src="../../../public/img/image_view/profile.png" style={{width: "5%"}} className="rounded"/>
                            <h3 className="ms-3">Jeremy Limanto</h3>
                        </div>
                        <h3>More by Jeremy Limanto</h3>
                        <div className="mt-4 d-flex justify-content-center gap-5">
                            <img src="../../../public/img/image_view/gambar1.png"/>
                            <img src="../../../public/img/image_view/gambar2.png"/>
                            <img src="../../../public/img/image_view/gambar3.png"/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
        </>
    );
}
export default ImageView;
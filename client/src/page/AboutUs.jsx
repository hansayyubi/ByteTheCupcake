import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import "../page/css/about_us_main/AboutUs.css"

export default function AboutUs() {
    return (
    <>
    <Navbar/>
    <div className="body">
        {/* <!-- Isi Konten --> */}
            <section className='pt-5' style={{fontFamily:"Handjet, sans-serif" }}>  
                    <div className="container pt-5">
                        <div className="d-flex flex-column align-items-center mt-5">
                            <h1 className="" style={{fontSize: "4rem"}}>Developed by 6 People</h1>
                            <h4 className="">under the authority of Celerates</h4>
                        </div>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <img src="image/malam.png" className="mb-5" style={{width:"80rem"}}/>
                    </div>
                    <div className="container">
                        <div className="d-flex justify-self-center mt-5">
                            <div className="d-flex flex-column mt-5">
                                <div className="row mt-5">
                                    <div className="col-">
                                <h1 className="text-start text-lg" style={{fontSize: "4.5rem"}}> Know as ByteTheCupcake</h1>

                                    </div>
                                    <div className="col me-5 pe-5">
                                        <h2 className="text-end me-5">In this world full of darkness,</h2>
                                        <h2 className="text-end me-5">you can savor the sweetness of your own cupcake</h2>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                                <img src="image/moon.png"/>
                                <h1 className="text my-4 ms-5 mb-5">Do you see it as a moon?</h1>
                        </div>
                    </div>
                    <div className="jumbotron disco">
                        <div className="container">
                            <div className="d-flex flex-column mt-5">
                                <h1 className="mt-5" style={{fontSize: "2.5rem"}}>But in our eyes...</h1>
                                <div className="d-flex justify-content-center">
                                    <img src="image/disco.png"/>
                                    <h2 className="align-self-end text-turun mb-5 pb-5" style={{fontSize: "2.5rem"}} >is a disco ball!!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="my-4" style={{fontSize: "3.5rem"}}>"Dance to the moonlight instead of</h1>
                            <h1 className="my-4" style={{fontSize: "3.5rem"}}>just gazing at the moon!"</h1>
                            <img src="image/jalan1.png" style={{width:"83rem"}}/>
                        </div>
                    </div>
            </section>
                {/* <!-- Bootstrap JS dan dependencies --> */}
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
    <Footer/>
    </>
)
}

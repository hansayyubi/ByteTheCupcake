import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container text-start text-md-left">
        <div className="row text-start text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mt-3">
            <img src="image/logo.png" alt="logo" />
          </div>
          <div className="col-md-8 col-lg-8 col-xl-8 mt-3">
            <a className="halaman fw-semibold mx-lg-2 " href="landingpage/html/index.html">Home</a>
            <a className="halaman fw-semibold mx-lg-2" href="gallery.html">Gallery</a>
            <a className="halaman fw-semibold mx-lg-2" href="#">About Us</a>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 mt-3">
            <a href="#"><i className="bi bi-instagram text-dark"></i></a>
            <a href="#"><i className="bi bi-facebook text-dark ms-1"></i></a>
            <a href="#"><i className="bi bi-twitter text-dark ms-1"></i></a>
            
          </div>
        </div>
        <div className="row justify-content-start mt-4">
          <div className="col-md-8 col-lg-9">
            <p className="isi-font">©2024 ByteTheCupcake/FinalProject 
            </p>
          </div>
        <div className="col-md-4 col-lg-3">
            <p className="isi-font">Support: 
                <a href="#" className="isi-font">bytethecupcake@gmail.com</a>
              </p>
        </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer

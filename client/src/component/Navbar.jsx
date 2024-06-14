import React from 'react'
import "../component/CSS/Navbar_main.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid d-flex">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <img src="image/logo.png" alt="logo" className="offcanvas-title img-logo" id="offcanvasNavbarLabel"/>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start  pe-3">
                <li className="nav-item fw-semibold">
                  <a className="nav-link mx-lg-2" aria-current="page" href="/landing-page">Home</a>
                </li>
                <li className="nav-item fw-semibold">
                  <a className="nav-link mx-lg-2" aria-current="page" href="./gallery">Gallery</a>
                </li>
                <li className="nav-item fw-semibold">
                  <a className="nav-link mx-lg-2" aria-current="page" href="./about-us">About Us</a>
                </li>
                <li className="nav-item dropdown" style={{marginRight: "5% !important"}}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight: "600"}}>
                    Contact us
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="https://t.me/6285161820411" target='_blank' rel='noreferrer'>Telegram</a></li>
                    <li><a className="dropdown-item" href="https://wa.me/6285161820411" target='_blank' rel='noreferrer'>WhatsApp</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="mailto:bytethecupcake@gmail.com">Email</a></li>
                  </ul>
                </li>
                <li className="nav-item fw-semibold bg-dark"> 
                  <a className="nav-link mx-lg-2" aria-current="page" href="./admin-dashboard" style={{color: "white", borderRadius: "10px"}}>Admin Dashboard</a>
                </li>
              </ul>
            </div>
          </div>
          <a className="navbar-brand me-auto flex-grow-1" href="landingpage/html/index.html"> <img src="image/logo.png" alt="logo" className="img-logo justify-content-center "/></a>
          <form className="d-flex mt-1 me-2" role="search">
            <span className="input-group-text" id="inputGroup-sizing-sm"><i className="bi bi-search"></i></span>
            <input className="form-control me-2" type="search" placeholder="Artist, Category, Topic...." aria-label="Search" aria-describedby="inputGroup-sizing-sm"/>
          </form>
          <a href="./post-content" className="btn btn-outline-light bg-dark btn-sm black-button me-2">Sell My Art</a>
          <a href="./cart" className="link-underline link-underline-opacity-0 text-dark">
          <i className="bi bi-cart3 fs-3 me-4"></i></a>
          <a href="" className="link-underline link-underline-opacity-0">
            <div className="user me-4">
              <li className="nav-item dropdown" style={{marginRight: "5% !important"}}>
                <img src="image/user1.jpg" alt="user" className="nav-link dropdown-toggle rounded-circle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"/>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{marginRight: "20px !important"}}>
                  <li><a className="dropdown-item" href="./profile">My Profile</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="./login-page">Log out</a></li>
                </ul>
            </li>
            </div>
          </a>
        </div>
      </nav> 
  )
}

export default Navbar

import React from 'react'
import Navbar from "../../component/Navbar";
import "../../component/CSS/Style.css";

export default function CartPage() {
    return (
        <>
        <Navbar/>
        <section>
            <div className="container">
                <h1 className="mt-5 pt-3 mb-5 pb-3">Your Cart</h1>
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-6"><h5><b>PRODUCT</b></h5></div>
                    <div className="col-xl-3"><h5><b>AUTHOR</b></h5></div>
                    <div className="col-xl-3 ps-5"><h5><b>TOTAL</b></h5></div>
                    <hr/>
                    <div className="col-xl-6 mb-5">
                        <div className="d-flex flex-row">
                            <img src="image/cartpage1.png" alt="" style={{width: "180px"}}/>
                            <div className="ms-3 mt-1">
                                <h6>Revoult-U</h6>
                                <h6 className="text-secondary mt-2">Rp.140.000</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <h5>Jeremy Limanto</h5>
                    </div>
                    <div className="col-xl-2">
                        <div className="d-flex flex-row justify-content-center">
                            <h5><b>Rp. 28.000</b></h5>
                        </div>
                    </div>
                    <div className="col-xl-1 text-center">
                        <i className="bi bi-backspace btn btn-danger btn-outline-light ms-2 " type="button" style={{width: "min-content"}}></i>
                    </div>

                    <div className="col-xl-6 mb-5">
                        <div className="d-flex flex-row">
                            <img src="image/cartpage2.png" alt="" style={{width: "180px"}}/>
                            <div className="ms-3 mt-1">
                                <h6>Barong Red Emotion</h6>
                                <h6 className="text-secondary mt-2">Rp.124.000</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <h5>Tommy Liu</h5>
                    </div>
                    <div className="col-xl-2">
                        <div className="d-flex flex-row justify-content-center">
                            <h5><b>Rp. 12.000</b></h5>
                        </div>
                    </div>
                    <div className="col-xl-1 text-center">
                        <i className="bi bi-backspace btn btn-danger btn-outline-light ms-2 " type="button" style={{width: "min-content"}}></i>
                    </div>

                    <div className="col-xl-6 mb-5">
                        <div className="d-flex flex-row">
                            <img src="image/cartpage3.png" alt="" style={{width: "180px"}}/>
                            <div className="ms-3 mt-1">
                                <h6>Raden Saleh</h6>
                                <h6 className="text-secondary mt-2">Rp.247.000</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <h5>Thomas Field</h5>
                    </div>
                    <div className="col-xl-2">
                        <div className="d-flex flex-row justify-content-center">
                            <h5><b>Rp. 24.000</b></h5>
                        </div>
                    </div>
                    <div className="col-xl-1 text-center">
                        <i className="bi bi-backspace btn btn-danger btn-outline-light ms-2 " type="button" style={{width: "min-content"}}></i>
                    </div>

                </div>
                <div className="d-flex justify-content-end align-items-end mt-5 mb-2 pt-5">
                    <div className="flex-column">
                        <div className="d-flex flex-row justify-content-between mb-2">
                            <h6>Subtotal</h6>
                            <h6><b>Rp.64.000</b></h6>
                        </div>
                        <h6 className="mb-4">Taxes and <u>shipping</u> calculated at checkout</h6>
                        <a href="/cart-check-out" ><button className="btn button-black btn-sm pt-1 mb-5" style={{width:"100%"}}>Check out</button></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

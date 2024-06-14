import React from 'react'
import Navbar from "../../component/Navbar";
import "../../component/CSS/Style.css";

const CheckOut= () => {
    return (
    <>
    <Navbar/>

    <section>
      <div className="container">
        <img src="image/atasCartpage.png" alt="" className="mt-5 pt-5" style={{width: "99%"}}/>
        <h1 className="mt-5 mb-5" style={{fontSize: "64px"}}><b className="body ">Check-Out!</b></h1>
        <hr style={{border: "2px solid #000"}}/>
                <div className="row d-flex justify-content-between mt-5 pt-5">
                <div className="col-xl-1"><h5> </h5></div>
                  <div className="col-xl-5"><h5><b>PRODUCT</b></h5></div>
                  <div className="col-xl-4"><h5><b>AUTHOR</b></h5></div>
                  <div className="col-xl-2"><h5><b>TOTAL</b></h5></div>
                  <hr/>
                  <div className="col-xl-1"><b>X</b></div>
                  <div className="col-xl-5 mb-5">
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
                  <div className="col-xl-3">
                    <div className="d-flex flex-row justify-content-center">
                      <h5><b>Rp. 28.000</b></h5>
                    </div>
                  </div>

                  <div className="col-xl-1"><b>X</b></div>
                  <div className="col-xl-5 mb-5">
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
                  <div className="col-xl-3">
                    <div className="d-flex flex-row justify-content-center">
                      <h5><b>Rp. 12.000</b></h5>
                    </div>
                  </div>

                  <div className="col-xl-1"><b>X</b></div>
                  <div className="col-xl-5 mb-5">
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
                  <div className="col-xl-3">
                    <div className="d-flex flex-row justify-content-center">
                      <h5><b>Rp. 24.000</b></h5>
                    </div>
                  </div>
  
                </div>
        <hr/>
        <div className="d-flex flex-row justify-content-end align-items-between mb-5 pb-5">
            <div className="row">
                <div className="col-8 d-flex flex-row justify-content-end" >
                    <img src="image/iconTicket.png" alt="" style={{width: "55px", height: "31px"}}/>
                    <p className="ms-3 pt-1 text-center">Voucher ByteTheCucpake</p>
                </div>
                <div className="col-1"> </div>
                <div className="col-3">
                    <button type="button" className="btn btn-link btn-outline-light text-end text-decoration-none">Pilih Voucher</button>
                </div>
            </div>
        </div>
        <div className="d-flex flex-row">
                <div className="col-4">
                    <div className="">
                        <label for="exampleFormControlTextarea1" className="form-label">Saran</label>
                        <textarea className="form-control border-dark" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> 
                </div>
                <div className="col-1"></div>
                <div className="col-7 mt-4 d-flex justify-content-end align-items-end p-3 mb-3" style={{border: "1px dotted #000"}}>
                    <div className="">
                        <div className="row">
                            <div className="col-3">
                                <h6>Pajak Platform</h6>
                            </div>
                            <div className="col-4">
                                <div className="">
                                    <h6>Reguler</h6>
                                    <p className="text-secondary"><small>Pajak Platform disesuaikan dengan harga produk</small></p>
                                </div>
                            </div>
                            <div className="col-2">
                                <h6><a href="" className="text-decoration-none">UBAH</a></h6>
                            </div>
                            <div className="col-3 text-end">
                                <h5>Rp. 5.000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-7 d-flex flex-column justify-content-end  p-3 mb-5"style={{border: "1px dotted #000"}}>
                    <div className="" >
                        <div className="row">
                            <div className="col-3">
                                <h6>Opsi Pengiriman:</h6>
                            </div>
                            <div className="col-4">
                                <div className="">
                                    <h6>Reguler</h6>
                                    <p className="text-secondary"><small>Akan diterima pada tanggal 22 - 24 Jun</small></p>
                                </div>
                            </div>
                            <div className="col-2">
                                <h6><a href="" className="text-decoration-none">UBAH</a></h6>
                            </div>
                            <div className="col-3 text-end">
                                <h5>Rp. 15.000</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="d-flex justify-content-end mb-5">
                    <div className="row">
                        <div className="col-xl-10 text-secondary">
                            <h5>Total Pemesanan (3 Product)</h5>
                        </div>
                        <div className="col-xl-2">
                            <h5><b className="text-primary">Rp.84.000</b></h5>
                        </div>
                    </div>
                      </div>
                      <div className="d-flex justify-content-between mb-5 mt-5">
                        <div className="row">
                            <div className="col-5">
                                <h5><b>Metode Pembayaran</b></h5>
                            </div>
                            <div className="col-4">
                                <button type="button" className="btn btn-outline-dark"><small>Transfer Bank</small></button>
                            </div>
                            <div className="col-3 mb-5">
                                <button type="button" className="btn btn-outline-primary"><small>Kartu Kredit / Debit</small></button>
                            </div>
                        </div>
                          </div>

                        <div className="d-flex justify-content-end mb-5 mt-3">
                            <div className="flex-column">
                                <div className="row">
                                    <div className="col-xl-9 text-secondary">
                                        <h5>Subtotal Pemesanan Produk</h5>
                                    </div>
                                    <div className="col-xl-3 mb-5">
                                        <h5><b>Rp.64.000</b></h5>
                                    </div>
                                </div>
                                <div className="row text-end mb-2">
                                    <div className="col-xl-9 text-secondary">
                                        <h5>Pajak Platform</h5>
                                    </div>
                                    <div className="col-xl-3">
                                        <h5><b>Rp.5.000</b></h5>
                                    </div>
                                </div>
                                <div className="row text-end mb-2">
                                    <div className="col-xl-9 text-secondary">
                                        <h5>Ongkos Kirim</h5>
                                    </div>
                                    <div className="col-xl-3">
                                        <h5><b>Rp.15.000</b></h5>
                                    </div>
                                </div>
                                <div className="row text-end mb-5">
                                    <div className="col-xl-9 text-secondary">
                                        <h5>Total Pembayaran</h5>
                                    </div>
                                    <div className="col-xl-3">
                                        <h4><b className="text-primary">Rp.84.000</b></h4>
                                    </div><a href="/Gallery" ><button className="btn button-black btn-sm pt-1 mb-5 mt-3" style={{width:"100%"}}>Check out</button></a>
                                </div>
                                

                            </div>
                            
                        </div>
                          
            </div>
            
        </div>
            
    </section>

    </>
  )
}
export default CheckOut;

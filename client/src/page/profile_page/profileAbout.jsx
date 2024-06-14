import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import "../../component/CSS/Style.css"

const ProfileAbout = () => {
        return(
                <>
        <Navbar/>
        <section>
            <div className="hero d-flex bg-light text-dark" style={{marginBottom:"23%"}}>
                <div className="container mt-5">
                    <div className="jumbotron d-flex justify-content-center">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-xl-2 ">
                                    <img src="image/user1.jpg" className=" rounded-center rounded-circle profile-img" alt="..."/>
                                </div>
                                <div className="col-xl-10">
                                    <div className="card-body text-center">
                                        <p className="card-title ms-5" style={{fontSize: "30px"}} >Semenjana Sasmaya</p>
                                        <a href="/editProfile"><button type="button" className="btn btn-outline-dark ms-5" style={{borderRadius: "50px"}} >Edit Profile</button></a>
                                        <a href="">
                                        <button
                                                type="button"
                                                className="btn btn-outline-dark ms-2 rounded-circle "
                                                style={{ width:"fit-content",borderRadius:"100%" }}
                                            >
                                                <i className="bi bi-three-dots"></i>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-start">
                            <a href="/Profile"><button type="button" className="btn  btn-outline-dark me-3" style={{borderRadius: "50px"}}>Wishlist</button></a>
                            <a href="/profileAbout"><button type="button" className="btn button-black" style={{borderRadius: "50px"}}>About</button></a>
                    </div>
                    <hr/>
                    <div id="project">
                        <div className="container">
                            <div className="row mt-5 ms-5 pt-5 mb-5">
                                <div className="col">
                                        <h4>Biography</h4>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-4 ms-5 me-5" style={{width: "650px"}}>
                                        <p className="ms-2">I'm an independent illustrator and designer based in Nanaimo on Vancouver Island, BC, Canada. I've been lucky enough to work with brands, products, and people from all over the globe and I'm always open to new projects and collaborations.<br/>
                                                If you're interested in tackling a project together, or just want to say hello, I'd be happy to hear from you: hi@numero1uno.com.<br/>
                                                SELECT CLIENTS<br/> Adobe, Collective Arts, Figma, Google, Hemlock, Highlights Magazine, Holler, Intercom, NaNoWriMo, Passion Planner, Pitch, Shopify, Sprig, Snapchat, Upwork.</p>
                                </div>
                                <div className="col-3">
                                        <div className="card p-4" style={{backgroundColor: "#F5F5F5", border: "none"}}>
                                                <a href="#" className="link-underline link-underline-opacity-0 text-dark mb-2"  style={{fontFamily: "Handjet, sans-serif"}}><i className="bi bi-instagram text-dark me-3"></i>@semenjana_sasmaya</a>
                                                <a href="#" className="link-underline link-underline-opacity-0 text-dark mb-2"  style={{fontFamily: "Handjet, sans-serif"}}><i className="bi bi-twitter text-dark me-3"></i>@semenjanaSasmaya</a>
                                                <a href="#" className="link-underline link-underline-opacity-0 text-dark mb-2"  style={{fontFamily: "Handjet, sans-serif"}}><i className="bi bi-facebook text-dark me-3"></i>Semenjana Sasmaya</a>
                                        </div>
                                </div>
                            </div>
                            <div className="row ms-5 mb-3">
                                <div className="col">
                                        <h4>Interest</h4>
                                </div>
                            </div>
                            <div className="row ms-5 mb-5 pb-5">
                                <div className="col-2">
                                        <a href="" ><button type="button" className="btn button-black" style={{fontFamily: "Sometype Mono, monospace"}}>Pop Art</button></a>
                                </div>
                                <div className="col-2">
                                        <a href="" ><button type="button" className="btn button-black" style={{fontFamily: "Sometype Mono, monospace"}}>3D Design</button></a>
                                </div>
                                <div className="col-2">
                                        <a href="" ><button type="button" className="btn button-black" style={{fontFamily: "Sometype Mono, monospace"}}>Illustration</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <Footer/>
                </>
        )
}
export default ProfileAbout 
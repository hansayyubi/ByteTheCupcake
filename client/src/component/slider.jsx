import React from "react";
import "../component/CSS/slider.css"
// import "../component/js/slider.js"
// import "../component/js/popup.js"
const Slider = () => {
    
    return (
        <>
        <div>
        {/* <!-- slider recomendation --> */}
        <section className="slider-recomendation" id="slider">
            <div className="container-outer-slider">
                {/* <!-- Content here --> */}
                <h2 style={{textAlign: "center"}}>Our trending original art for sale</h2>
                <p style={{textAlign: "center", fontSize: "small"}}>Our online art gallery favorite, don&apos;t miss your chance - shop original artwork now!</p>
                <div className="container-btn">
                    <button type="button" className="btn btn-group-sm">
                        <a style={{textAlign: "center",color: "#000",fontWeight: "bolder",fontSize: "12px"}} href="./gallery" className="active">SEE ALL COLLECTION✦</a>
                    </button>
                </div>
                <div className="container-slider">
                    <div id="sliderWrapper" className="slider-wrapper">
                        <button id="prev-slide" className="slide-button material-symbols-rouded">
                            <i className="fa-solid fa-arrow-left"></i>
                            </button>
                        {/* <!-- parent --> */}
                        <div className="image-list">
                            {/* <!-- child --> */}
                            <a className="image-parent" href="/image-view" target="_blank" >
                                <img src="/img/slider-wrapper/img_1.jpg" alt="" className="image-child" />
                            </a>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_2.png" alt="" className="image-child" />
                            </div>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_3.jpg" alt="" className="image-child"/>
                            </div>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_4_elden_ring.jpg" alt="" className="image-child"/>
                            </div>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_5.jpg" alt="" className="image-child"/>
                            </div>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_6.jpg" alt="" className="image-child"/>
                            </div>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_7.jpg" alt="" className="image-child"/>
                            </div>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_8.jpg" alt="" className="image-child"/>
                            </div>
                            <div className="image-parent">
                                <img src="/img/slider-wrapper/img_9.jpg" alt="" className="image-child"/>
                            </div>
                        </div>
                        <button id="next-slide" className="slide-button material-symbols-rouded"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="slider-scrollbar">
                        <div className="scrollbar-track">
                            <div className="scrollbar-thumb">
                            </div>
                        </div>
                    </div>
                    {/* <!-- pop up content here --> */}
                    <div className="container">
                        <div className="popup-image">
                            <span>&times;</span>
                            <div className="img">
                                <img src="/img/slider-wrapper/img_2.png" alt=""/>
                                <div className="img-desc">
                                    <p className="title">Title here!</p>
                                    <div className="tag">
                                        <a href="">#modernart</a>
                                        <a href="">#animanga</a>
                                        <a href="">#illustration</a>
                                        <a href="">#forsale</a>
                                    </div>
                                    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestias minus excepturi ad, omnis commodi quam libero dolor repellat voluptate?</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </section>
        {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous">            
        </script>
        
    </div>
    </>
    )
}
export default Slider;
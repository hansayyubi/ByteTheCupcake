import React from "react";
import Navbar from "../component/Navbar";
import "../page/css/postContent_main/postcontent_main.css"
const PostContentPage = () => {
    return (
        // opening tag
        <>
        {/* first element start */}
        <Navbar/>
        {/* Image post element */}
        <div className="postContentContainer">
            <div className="container">
                {/* image upload */}
                <div className="imageContainerMain">
                    <a href="" type="button">
                        <button className="btn btn-light buttonUploadImage">
                            <div className="innerButtonDiv">
                                <span class="material-symbols-outlined">upload</span>
                                <label htmlFor="">Upload Image</label>
                            </div>
                        </button>
                    </a>
                    <br />
                    <p style={{fontSize: "12px", marginTop:"1%", color:"white"}}>
                        JPG/PNG
                    </p>
                </div>
                {/* form */}
                <div className="formContainerMain">
                    <form className="formMain" action="">
                        <div className="form-group">
                            <div className="formCommon">
                                <label htmlFor="Title">Title</label>
                                <input className='inputLabel' id="title" name="title" placeholder='Type your art title here!' required/>
                                <div className="wordCounter">
                                    <p>0/10</p>
                                </div>
                            </div>
                            <div className="formLarge">
                                <label htmlFor="Description">Description</label>
                                <textarea id="description" placeholder="Write something here!"></textarea>
                            </div>
                            <div className="formCommon" style={{marginTop:"2%"}}>
                                <label htmlFor="Tags">Tags</label>
                                <input className='inputLabel' id="fname" name="fname" placeholder='Type your art tags here!' required/>
                            </div>
                            <div className="formCommon"style={{marginTop:"2%"}}>
                                <label htmlFor="Price">Price</label>
                                <input className='inputLabel' id="fname" name="fname" placeholder='Type your art price here!' required/>
                            </div>
                        </div>
                        <div className="form-group" style={{marginTop: "-4%"}}>
                            <div className="inputContainer">
                                <input type="checkbox"/>
                                <label htmlFor="OriginalWork">Original Work</label>
                                <input type="checkbox"/>
                                <label htmlFor="OriginalWork">Ai-Generated</label>
                            </div>
                        </div>
                        <div className="divButton">
                            <a href="" type="submit">
                                <button className="btn btn-dark Button">
                                    Post Your Art!
                                </button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default PostContentPage;
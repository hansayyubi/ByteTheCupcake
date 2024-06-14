import Navbar from "../../component/Navbar";
import "../../component/CSS/Style.css";


const EditProfile = () => {
  return (
    <>
      <Navbar/>
    {/* <!-- Isi konten --> */}
    <section>
        <div className="container mb-5">
          <div className="d-flex align-items-center flex-column">
            <h1 className="m-5 p-5 p-2" >Profile</h1>
            <div className="card border-black p-2" style={{width: "85%"}} >
                <h5 className="ms-3 mt-3">Edit Profile</h5>
                <hr className="text-dark opacity-100"/>
                  <div className="d-flex justify-content-evently">
                    <p className="ms-3 col-sm-3">Profil Image</p>
                    
                    <div className="col-sm-2 align-self-center mb-3 mt-3 " id="my-profile-picture">
                      <img src="image/user1.jpg" alt="logo"  className="rounded-circle" style={{width: "100px", height: "100px"}} />
                    </div>
                    <div className="col-sm-9 align-self-center " >
                        <label htmlFor="profile-upload" className="btn button-black pt-2 pb-2 ps-4 pe-4 ms-5" style={{borderRadius: "10px"}} >Upload New</label>
                          <input type="file" accept="image/jpg, image/png, image/jpeg"  id="profile-upload"></input>
                        <a href=""><button type="button" className="btn btn-outline-dark ms-2" style={{borderRadius: "10px"}} >Remove</button></a>
                    </div>
                  </div>
                
                <hr className="text-dark opacity-100"/>
                
                <div className="ms-2 mb-3 mt-3 row">
                    <div className="col-sm-3">
                    <label htmlFor="inputUsername" className="col-form-label">Username</label></div>
                    <div className="col-sm-7">
                      <input type="username" className="form-control border border-black" id="inputUsername" placeholder="semenjanasasmaya"/>
                    </div>
                </div>

                <hr className="text-dark opacity-100"/>

                <div className="ms-2 mb-3 mt-3 row">
                  <div className="col-sm-3">
                    <label htmlFor="inputName" className="col-form-label">Nama Lengkap</label></div>
                    <div className="col-sm-7">
                      <input type="username" className="form-control border border-black" id="inputName" placeholder="Semenjana Sasmaya"/>
                    </div>
                </div>
                <div className="ms-2 mb-3 row">
                  <div className="col-sm-3">
                    <label htmlFor="inputEmail" className="col-form-label">E-mail</label></div>
                    <div className="col-sm-7">
                      <input type="email" className="form-control border border-black" id="inputEmail" placeholder="numero1uno@gmail.com"/>
                    </div>
                </div>
                <div className="ms-2 mb-5 row">
                  <div className="col-sm-3">
                    <label htmlFor="inputPassword" className="col-form-label">Password</label></div>
                    <div className="col-sm-7">
                      <input type="password" className="form-control border border-black" id="inputPassword" placeholder="***********"/>
                    </div>
                </div>
                <div className="text-end mt-5 pt-5 mb-5 me-3">
                    <a href="/Profile"><button type="button" className="btn button-black me-2" style={{borderRadius: "10px"}} >Simpan</button></a>
                    <a href="/Profile"><button type="button" className="btn btn-outline-dark" style={{borderRadius: "10px"}}>Batalkan</button></a>
                </div>
            </div>
          </div>
        </div>
        
         
    </section>
    {/* <!-- akhir Isi konten --> */}
    </>
  );
};
export default EditProfile;


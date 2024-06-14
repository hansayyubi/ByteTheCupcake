import { BrowserRouter, Routes, Route } from "react-router-dom"
//local file imports
import LandingPage from "../src/page/landing-page.jsx"
import Profile from "../src/page/profile_page/Profile.jsx"
import LoginPage from "../src/page/login_page.jsx"
import RegisterPage from "../src/page/register_page.jsx"
import InterestPage from "./component/interest.jsx"
import PostContentPage from "../src/page/postcontent_main.jsx"
import CartPage from "./page/cart_page/CartPage.jsx"
import ProfileAbout from "./page/profile_page/profileAbout.jsx"
import Gallery from "./page/Gallery.jsx"
import EditProfile from "./page/profile_page/editProfile.jsx"
import AboutUs from "./page/AboutUs.jsx"
import AdminDashboardMain from "./page/admin_dashboard_main/admin_dashboard.jsx"
import AdminOrderMonitoring from "./page/admin_dashboard_main/admin_order_monitoring.jsx"
import AdminArtSelection from "./page/admin_dashboard_main/admin_artselection.jsx"
import CheckOut from "./page/cart_page/checkOut.jsx"
import ImageView from "../src/page/image_view/image_view_main.jsx"
function App() {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/login-page" element={<LoginPage/>}/>
                        <Route path="/register-page" element={<RegisterPage/>}/>
                        <Route path="/landing-page" element={<LandingPage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/profile-about" element={<ProfileAbout/>}/>
                        <Route path="/editProfile" element={<EditProfile/>}/>
                        <Route path="/interest-page" element={<InterestPage/>}/>
                        <Route path="/post-content" element={<PostContentPage/>}/>
                        <Route path="/section-checkout" element={<CartPage/>}/>
                        <Route path="/gallery" element={<Gallery/>}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="/admin-dashboard" element={<AdminDashboardMain/>}/>
                        <Route path="/admin-order-monitoring" element={<AdminOrderMonitoring/>}/>
                        <Route path="/admin-art-selection" element={<AdminArtSelection/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/cart-check-out" element={<CheckOut/>}/>
                        <Route path="/image-view" element={<ImageView/>}/>
                    </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;
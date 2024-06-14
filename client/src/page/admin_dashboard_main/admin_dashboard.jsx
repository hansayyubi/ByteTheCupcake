import "../css/admin_dashboard_main/admin_dashboard_main.css"
import AdminNavbar from "../../component/AdminNavbar";

const AdminDashboardMain =  () => {
    return (
        <>
            <div>
                <div className="container-admin">
                    <AdminNavbar/>
                    <div className="navigation">
                        <ul>
                            <li>
                                <a href="">
                                    <span className="icon">
                                        <img src="image/logo.png" alt="" className=""/>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="./admin-dashboard">
                                    <span className="icon">
                                        <span className="material-symbols-outlined">
                                            table_chart_view
                                        </span>
                                    </span>
                                    <span className="title"><b>Dashboard</b></span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin-art-selection">
                                    <span className="icon">
                                        <span className="material-symbols-outlined">
                                            art_track
                                        </span>
                                    </span>
                                    <span className="title"><b>Art Selection</b></span>
                                </a>
                            </li>
                            <li>
                                <a href="./admin-order-monitoring">
                                    <span className="icon">
                                        <span className="material-symbols-outlined">
                                            shopping_cart
                                        </span>
                                    </span>
                                    <span className="title"><b>Orders</b></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Main --> */}
                    <div className="main">
                        <h1 className="ms-4 mt-3"><b>Product Inventory</b></h1>
                        <div className="topbar">
                            <div className="toggle">
                                <a href="/landing-page">
                                    <i className="bi bi-arrow-left" style={{color: "#00000"}}></i>
                                </a>
                            </div>
                        </div>
                        <h1 className="ms-5 mt-3"><b>Product Inventory</b></h1>
                        <div className="card-group ms-5">
                            <div className="card h-100 border-0">
                            <div className="card-body">
                                <h6 className="card-title text-secondary"><b>Total Product</b></h6>
                                <h3 className="card-text"><b>57</b></h3>
                            </div>
                            </div>
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                <h6 className="card-title text-secondary"><b>Sell Monthly</b></h6>
                                <h3 className="card-text"><b>14</b></h3>
                                </div>
                            </div>
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                <h6 className="card-title text-secondary"><b>Art Pending</b></h6>
                                <h3 className="card-text"><b>24</b></h3>
                                </div>
                            </div>
                            <div className="card h-100 border-0">
                                <div className="card-body">
                                <h6 className="card-title text-secondary"><b>Orders</b></h6>
                                <h3 className="card-text"><b>12</b></h3>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <h6 className="m-3 ms-5 ps-5">Reminder</h6>
                            <i className="bi bi-hand-index"></i>
                        </div>
                        <div className="m-3 ms-5 ps-5">
                            <div className="card d-flex align-items-start text-center border-0">
                                <span className="border-danger border-start border-5 mb-2 text-center"><p className="ms-3">Ada 24 Art Selection!</p></span>
                                <span className="border-danger border-start border-5 text-center"><p className="ms-3">Ada 12 Orders yang harus diselesaikan!</p></span>
                            </div>
                        </div>
                            <div className="row d-flex flex-row align-items-center">
                                <div className="col-6 d-flex flex-row align-items-center">
                                    <h6 className="m-3 ms-5 ps-5"><b>Total visits</b></h6>
                                    <i className="bi bi-exclamation-circle"></i>
                                </div>
                                <div className="col-6 d-flex flex-row align-items-center">
                                    <hr className="text-dark"/>
                                    <p className="text-secondary me-3">Berdasarkan Bulan</p>
                                    <i className="bi bi-three-dots btn btn-outline-secondary ms-3"></i>
                                </div>
                            </div>
                        <div className="container">  
                            <div className="chart-container">
                                <canvas id="myChart"></canvas>
                                <div id="chartTooltip" className="chart-tooltip"></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminDashboardMain;

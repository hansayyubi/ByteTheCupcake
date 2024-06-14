import Navbar from "../../component/Navbar"; // eslint-disable-line
import "../css/admin_dashboard_main/admin_order_monitoring.css"
const AdminOrderMonitoring = () => {
    return (
        <>
        <div>
            <div className="container-admin">
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
                {/*Main*/}
                <div className="main">
                    <h1 className="ms-4 mt-3"><b>Product Inventory</b></h1>
                    <div className="topbar">
                        <div className="toggle">
                            <a href="/landing-page">
                                <i className="bi bi-arrow-left"></i>
                            </a>
                        </div>
                    </div>
                            <h3 className="ms-3">Art Selection</h3>
                            <div className="table-responsive p-3">
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th scope="col">Author</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Art Photos</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Tags</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Jeremy Limanto</td>
                                    <td>Raden Saleh Diponegoro</td>
                                    <td>Rp. 90.000</td>
                                    <td><img src="../../../public/img/img_artselection/gambar1.png" style={{width: "200px", objectFit: "cover"}}/></td>
                                    <td>Lukisan ini menggambarkan salah satu momen paling penting dalam
                                    sejarah Indonesia, yakni penangkapan.....</td>
                                    <td>
                                    <span className="badge text-bg-secondary">Pop Art</span>
                                    <span className="badge text-bg-secondary">Pixel Art</span>
                                    </td>
                                    <td>
                                    <button className="btn btn-sm btn-success">Terima<i className="bi bi-check-lg"></i></button>
                                    <button className="btn btn-sm btn-danger"><i className="bi bi-x-square"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jeremy Limanto</td>
                                    <td>Raden Saleh Diponegoro</td>
                                    <td>Rp. 90.000</td>
                                    <td><img src="../../../public/img/img_artselection/gambar2.png" style={{width: "200px"}}/></td>
                                    <td>Lukisan ini menggambarkan salah satu momen paling penting dalam
                                    sejarah Indonesia, yakni penangkapan.....</td>
                                    <td>
                                    <span className="badge text-bg-secondary">Pop Art</span>
                                    <span className="badge text-bg-secondary">Pixel Art</span>

                                    </td>
                                    <td>
                                    <button className="btn btn-sm btn-success">Terima<i className="bi bi-check-lg"></i></button>
                                    <button className="btn btn-sm btn-danger"><i className="bi bi-x-square"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jeremy Limanto</td>
                                    <td>Raden Saleh Diponegoro</td>
                                    <td>Rp. 90.000</td>
                                    <td><img src="../../../public/img/img_artselection/gambar3.png" style={{width: "200px"}}/></td>
                                    <td>Lukisan ini menggambarkan salah satu momen paling penting dalam
                                    sejarah Indonesia, yakni penangkapan.....</td>
                                    <td>
                                    <span className="badge text-bg-secondary">Pop Art</span>
                                    <span className="badge text-bg-secondary">Pixel Art</span>

                                    </td>
                                    <td>
                                    <button className="btn btn-sm btn-success">Terima<i className="bi bi-check-lg"></i></button>
                                    <button className="btn btn-sm btn-danger"><i className="bi bi-x-square"></i></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="float-end me-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                            </div>
                    </div>
            </div>
        </div>
        </>
    )
};
export default AdminOrderMonitoring;
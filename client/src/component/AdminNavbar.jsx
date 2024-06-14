import React from "react";  // eslint-disable-line
import "../component/CSS/AdminNavbar.css"
const AdminNavbar = () => {
    <>
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
    </>
}
export default AdminNavbar;
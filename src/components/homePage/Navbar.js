
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import { useNavigate, Navigate, useLocation, Link } from "react-router-dom";
import App3 from "../visitorLoginPage/App3";


function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mx-2" href="#">Watson's Firms</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 
                    <ul className="navbar-nav mx-2 position-absolute top-0 start-50 translate-end-x">
                    <li className="nav-item  p-2">
                            <a className="nav-link btn btn-outline-secondary mx-2" href="/">Products</a>
                        </li>
                            <li className="nav-item mx-2 p-2">
                                <Link className="nav-link btn btn-outline-secondary mx-2" to="/App3" state={{data:"Att"}}>Attorney advisory</Link>
                            </li>
                            <li className="nav-item active p-2">
                                <Link className="nav-link btn btn-outline-secondary" to="/App1">Login/Register</Link>
                            </li>
                        </ul>
                </div>

            </nav>
        </>
    );

}

export default Navbar;
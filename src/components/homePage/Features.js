import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import { useNavigate, Navigate, useLocation, Link } from "react-router-dom";



function Features() {

    return (
        <>
            <div>

                {/* msking the cards section */}
                <div className=" p-4 d-flex has-bgmx-2-img shadow-lg  rounded-3">
                    <div className="bg-image ">
                        <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGF3JTIwZmlybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" border rounded-3 w-100 shadow-lg" />
                        <a href="#!">
                            <div className=" btn btn-content-info d-flex justify-content-center align-items-center  mx-2 ">
                                lawyer's firm
                            </div>
                        </a>
                    </div>
                    <div className="bg-image ripple mx-4  rounded-3 "  >
                        <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlzaXRvcnMlMjBsYXclMjBmaXJtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className=" border rounded-3 w-100 shadow-lg" />
                        <a href="#!">
                            <div className=" btn btn-content-info d-flex justify-content-center align-items-center  mx-2 ">
                                visitors
                            </div>
                        </a>
                    </div>
                    <h1 className="container">
                    What we Offer
                    </h1>
                </div>
                
            </div>

        </>
    );

}

export default Features;
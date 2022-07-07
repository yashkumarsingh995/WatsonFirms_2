
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import { useNavigate, Navigate, useLocation, Link } from "react-router-dom";



function Services() {

    return (
        <>

            {/* msking the cards section */}
            <div className=" p-4 d-flex border shadow-lg ">
               
                <div className=" d-flex justify-content-center ">
                <h1 className="conteiner">
                    Our Products
                </h1>
                    <div class="card mx-4 border shadow-lg" style={{ width: "18rem;" }}>
                        <img src="https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg?size=626&ext=jpg&ga=GA1.2.1334742327.1657210046" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick exent.</p>
                            <a href="#" class="btn btn-outline-primary">Add to Cart</a>
                        </div>
                    </div>

                    <div class="card mx-4 border shadow-lg" style={{ width: "18rem;" }}>
                        <img src="https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg?size=626&ext=jpg&ga=GA1.2.1334742327.1657210046" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick exent.</p>
                            <a href="#" class="btn btn-outline-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>



                <div className=" d-flex justify-content-center ">
                    <div className="card mx-4 border shadow-lg" style={{ width: "18rem;" }}>
                        <img src="https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg?size=626&ext=jpg&ga=GA1.2.1334742327.1657210046" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick exent.</p>
                            <a href="#" className="btn btn-outline-primary">Add to Cart</a>
                        </div>
                    </div>

                 
                </div>

            </div>

        </>
    );

}

export default Services;
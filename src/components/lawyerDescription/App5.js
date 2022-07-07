import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";

import App3 from "../visitorLoginPage/App3";


function App5() {
    return (
        <>
            <div className="card"  >
                <img src="..." class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="container d-flex flex-row">
                        <button class="btn btn-primary p-4 mx-2">Goto the discussion </button>
                        <button class="btn btn-primary p-4 mx-2">Goto the Payment Page </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default App5;
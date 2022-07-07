import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import { useNavigate,Navigate,useLocation } from "react-router-dom";
import App3 from "../visitorLoginPage/App3";


function App2() {
    let location=useLocation();
    let navigate=useNavigate();

    const myStyle={
        backgroundImage: 
 "url('https://media.istockphoto.com/photos/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-picture-id1325676218?b=1&k=20&m=1325676218&s=170667a&w=0&h=bYOZs28l1wAgJzd6fFLY2snmjnPpBp8PIFwxfRkkkOI=')",
 position:"relative",
        height:'100vh',
        width:"100vw",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
   
    return (
        
        <>  
        <div className=" bg-image " style={myStyle}>
            <div className="box p-5 inner cover container bg-image border shadow-lg rounded-3 " style={myStyle}>
                <div className=" d-flex flex-row  ">
                    <div className=" w-75 p-2  border bg-transparent rounded-3 mx-2">
                        <h2>Add borders</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <li className="btn btn-outline-secondary" type="button" >Lawyer</li>
                    </div>
                    <div className=" w-25  border rounded-3 bg-transparent shadow-lg">
                        <img src="..." class="img-fluid" alt="..." />
                    </div>
                </div>
                <div className="  d-flex flex-row">
                    <div className=" w-25  border rounded-3  bg-transparent  shadow-lg">
                        <img src="..." class="img-fluid" alt="..." />
                    </div>
                    <div className=" w-75 p-2  border  bg-transparent rounded-3 mx-2">
                        <h2>Add borders</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <li className="btn  btn-outline-secondary" type="button"  onClick={()=>{ navigate("/App3")}}>Visitor</li>
                    </div>
                </div>
            </div>
            </div>
        </>
    );

}

export default App2;
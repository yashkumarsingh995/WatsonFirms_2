import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import App3 from "../visitorLoginPage/App3";
import Services from "./Sevices";
import Navbar from './Navbar';
import Features from "./Features";


function App0() {

  const myStyle = {
    backgroundImage:
      "url('https://media.istockphoto.com/photos/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-picture-id1325676218?b=1&k=20&m=1325676218&s=170667a&w=0&h=bYOZs28l1wAgJzd6fFLY2snmjnPpBp8PIFwxfRkkkOI=')",
    position: "relative",
    height: '100vh',
    width: "100vw",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <>
      <div className="bg-image" style={myStyle}>


        <main role="main" className="inner cover container bg-image border shadow-lg rounded-5" style={myStyle}  >
          <h1 className=" d-flex justify-content-center my-4 cover-heading">Cover your page.</h1>
          <p className="lead d-flex justify-content-center">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead d-flex justify-content-center">
            <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>
      </div>
      <h1 className="container my-2 p-4">Shop Now</h1>
       <Services/>
       
       <h1 className="container my-2 p-4"> Our Services </h1>
       
       <Features/>
      </>
      );

}

      export default App0;
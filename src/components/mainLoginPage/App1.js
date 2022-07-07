import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../../styles/mainLoginPage/style.css";
import { Link, useNavigate,Navigate,useLocation } from "react-router-dom";
import App2 from "../optionPageAfterTheMainLogin/App2";



function App1() {
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const myStyle={
      backgroundImage: 
"url('https://media.istockphoto.com/photos/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-picture-id1325676218?b=1&k=20&m=1325676218&s=170667a&w=0&h=bYOZs28l1wAgJzd6fFLY2snmjnPpBp8PIFwxfRkkkOI=')",
position:"relative",
      height:'100vh',
      width:"100vw",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

  // JSX code for login form
  const renderForm = (
    <div >
    <div className="form ">
      <form onSubmit={handleSubmit}>
        <div className="input-container rounded-3">
          <label>Username </label>
          <input  className="rounded-3" type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container ">
          <label>Password </label>
          <input  className="rounded-3" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container rounded-3">
          <input  className="rounded-3" type="submit"/>
        </div>
      </form>
    </div>
    </div>
  );
   
  const location = useNavigate();
  return (
    <div  className=" app inner cover  bg-image border shadow-lg rounded-3" style={myStyle}>
      <div className="login-form rounded-3 bg-transparent px-5 translate-right">
        <div className="title">Sign In</div>
        {isSubmitted ?  location("/App2"): renderForm}
      </div>
    </div>
  );
}

export default App1;
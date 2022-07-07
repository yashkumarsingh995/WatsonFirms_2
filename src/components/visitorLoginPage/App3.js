import React, { useState } from "react";


import "../../styles/mainLoginPage/style.css";
import App4 from "../visitorDashboard/App4";
import { Link, useNavigate,Navigate,useLocation } from "react-router-dom";

function App3() {


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
  let navigate=useNavigate();
  const location = useLocation();
  const data = location.state;
  var showState="Login";
  var showVarDes;
  if(data===null)  
  {
    showVarDes="Login"
    showState="Sign In as an Guest"
  }
  else 
  { 
    showVarDes="SignUp"
    showState="Register Yourself"
  }
  // JSX code for login form
  var renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required className="rounded-3" />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required className="rounded-3" />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container" type="submit" >
           <input type="submit"  className="rounded-3  btn btn-success"/>
           
        </div>
      </form>
    </div>
  );

  // alert(data.data);
  return (
    <div className=" bg-image" style={myStyle}>
    <div className="app inner cover container bg-image border shadow-lg rounded-3 " style={myStyle}>
      <div className="login-form rounded-3 bg-transparent px-5 translate-right">
        <div className="title ">{showState}</div>
        {isSubmitted ? navigate("/App4"): renderForm}
      </div>
    </div>
    </div>
  );
}

export default App3;
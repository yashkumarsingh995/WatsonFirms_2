import React, { useState } from 'react';

import '../../styles/visitorDashboard/style.css';
import { Link, useNavigate,Navigate,useLocation } from "react-router-dom";
import App5 from '../lawyerDescription/App5';
// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Andy', age: 32 ,desc:"this is the description ares of the particular lawyer" },
  { id: 2, name: 'Bob', age: 30 ,desc:"this is the description ares of the particular lawyer"},
  { id: 3, name: 'Tom Hulk', age: 40,desc:"this is the description ares of the particular lawyer" },
  { id: 4, name: 'Tom Hank', age: 50,desc:"this is the description ares of the particular lawyer" },
  { id: 5, name: 'Audra', age: 30 ,desc:"this is the description ares of the particular lawyer"},
  { id: 6, name: 'Anna', age: 68 ,desc:"this is the description ares of the particular lawyer"},
  { id: 7, name: 'Tom', age: 34,desc:"this is the description ares of the particular lawyer" },
  { id: 8, name: 'Tom Riddle', age: 28,desc:"this is the description ares of the particular lawyer" },
  { id: 9, name: 'Bolo', age: 23,desc:"this is the description ares of the particular lawyer" },
];

function App4() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
   let navigate = useNavigate();
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
    <>     <div className="box">
             
          </div>
 
          <div className=" border rounded-3 h-75   inner cover  bg-image border shadow-lg rounded-3 " style={myStyle}>
            <div className="input-group mb-3 mx-3 rounded-3 ">             
             <input
              type="search"
              value={name}
              onChange={filter}
              className="input"
              placeholder="Filter"
            /></div>
            <div className="user-list">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user,i) => (
                  <div className="w-50 p-4 border rounded-3 mx-2 my-2">
                    <li key={user.id} className="user">
                      <span className="user-id">{user.id}</span>
                      <span className="user-name">{user.name}</span>
                      <span className="user-age">{user.age} year old</span>
                    </li>
                    <p className="user-desc">{user.desc}</p>
                    <button className="btn btn-primary"  > Select</button>
                    
                  </div>
                ))
              ) : (
                <h1>No results found!</h1>
              )}
            </div>
          </div>
    
     
       
    </>
  );
}

export default App4;


import App5 from './components/lawyerDescription/App5';
import App1 from './components/mainLoginPage/App1';
import App2 from './components/optionPageAfterTheMainLogin/App2';
import App4 from './components/visitorDashboard/App4';
import App3 from './components/visitorLoginPage/App3';
import App0 from './components/homePage/App0';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/homePage/Navbar';
import Footer from './components/homePage/Footer';
import App6 from './components/payment/App6';



function App() {
  return (
   <>
       <BrowserRouter>
       <Navbar/>
          <Routes>
          <Route path="/" element={<App0/>}/> 
            <Route path="/App1" element={<App1/>}/>            
            <Route path="/App2" element={<App2 />} />
            <Route path="/App3" element={<App3/>}/>
            <Route path="/App4" element={<App4/>}/>
            <Route path="/App5" element={<App5/>}/>
            <Route path="/App6" element={<App6/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
   </>
  );
}

export default App;

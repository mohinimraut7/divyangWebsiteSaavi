import React,{useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './Pages/Home';          
 import Topupdates from './Components/Topupdates';
import Footer from './Components/Footer';
import LogoNavbar from './Components/LogoNavbar';
import Schemes from './Pages/Schemes';
import Profile from './auth/Profile';
import SchemesTabs from './Pages/SchemesTabs';


import MyApplications from './Pages/MyApplications';
import ApplicantFormNew from './auth/ApplicationFormNew';
import SignIn from './auth/SignIn';
import Registration from './auth/Registration';
import TermsAndConditions from './Pages/TermsAndConditions';

function App() {
  const savedModalState = localStorage.getItem('isModalOpen');
  const [isModalOpen, setIsModalOpen] = useState(savedModalState === 'true');


  const openModal = () => {
    setIsModalOpen(true);
    localStorage.setItem('isModalOpen', 'true'); 
  };
  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('isModalOpen', 'false'); 
  };
   return (
    <Router> 
     <Topupdates />
    
     <LogoNavbar />
     <Navbar openModal={openModal} />

    
      <div className="container-fluid d-block w-100">
        <Routes>
          <Route path="/" element={<Home />} />
         
      
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/profile" element={<Profile />} />
         
          <Route path="/schemes" element={<Schemes />} />
         
          <Route path="/schemestabs" element={<SchemesTabs />} />
          <Route path="/myapplicatons" element={< MyApplications/>} />
          <Route path="/applicationformnew" element={<ApplicantFormNew />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
     <Footer />   
    </Router>
  );
}

export default App;


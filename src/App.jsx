import React,{useState } from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './Pages/Home';          
import Services from './Pages/Services'; 
import About from './Pages/About';       
import Topupdates from './Components/Topupdates';
import Footer from './Components/Footer';
import LogoNavbar from './Components/LogoNavbar';
import Auth from './auth/Auth';
import Schemes from './Pages/Schemes';
import Profile from './auth/Profile';
import SchemesTabs from './Pages/SchemesTabs';

import BreadcrumbNavbar from './Components/BreadcrumbNavbar';
import MyApplications from './Pages/MyApplications';

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
 <BreadcrumbNavbar/>
    
      <div className="container-fluid d-block w-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} open={isModalOpen} closeModal={closeModal} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/about" element={<About />} />
          <Route path="/schemestabs" element={<SchemesTabs />} />
          <Route path="/myapplicatons" element={< MyApplications/>} />
        </Routes>
      </div>
     <Footer />   
    </Router>
  );
}

export default App;


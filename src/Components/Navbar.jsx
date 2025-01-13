import React, { useState,useEffect  } from 'react';
import { Link,useNavigate,useLocation} from 'react-router-dom'; 
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Button, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  
function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);
  const toggleSidebar = () => {                     
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsAuthenticated(false); 
    navigate('/signin'); 
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}  
          aria-controls="navbarTogglerDemo03"
          aria-expanded={isSidebarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
   
        <div className={`collapse navbar-collapse ${isSidebarOpen ? 'show' : ''}`} id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display:'flex'}}>
            <li className="nav-item">
              <Link className="nav-link active" to="/" style={{fontWeight:'bold',textTransform:'uppercase',fontSize:'12px',marginLeft:'10px'}}><span>Home</span></Link>
            </li>
                      
            <li className="nav-item">
              <Link className="nav-link" to="/schemes" style={{fontWeight:'bold',textTransform:'uppercase',fontSize:'12px',marginLeft:'10px'}}><span>Schemes</span></Link>
            </li>
         

            {isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/myapplicatons" style={{fontWeight:'bold',textTransform:'uppercase',fontSize:'12px',marginLeft:'10px'}}><span>My Applications Status</span></Link>
            </li>)}
            {isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/applicationformnew" style={{fontWeight:'bold',textTransform:'uppercase',fontSize:'12px',marginLeft:'10px'}}><span>Apply For Scheme</span></Link>
            </li>)}

          </ul>
         
         

{isAuthenticated ? (
  <>
    <Box>
              <IconButton sx={{ color: '#FB404B' }} onClick={handleLogout}>
                <PowerSettingsNewIcon />
              </IconButton>
            </Box>

            <Button
            variant="text"
            size="small"
            color="success"
                  sx={{
                  fontWeight:'bold',
                    marginRight: 2,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease', 
                    '&:hover': {
      backgroundColor: '#1B5E20', 
      color:'white'
    },
                  }}
                  onClick={() => navigate('/profile')}
                >
                  <AccountCircleIcon sx={{ marginRight: '8px' }} /> {/* Profile icon */}
                  Profile
                </Button>
  </>
          
          ) : (
            <Box sx={{ display: 'flex' }}>
              <Button sx={{ color: '#FB404B' }} onClick={() => navigate('/register')}>
                Register
              </Button>
              <Button sx={{ color: '#FB404B' }} onClick={() => navigate('/signin')}>
                Login
              </Button>
            </Box>
          )}
        </div>
      </div>
      <style>
        {`
          .nav-link {
            position: relative;
            text-decoration: none;
            display: inline-block;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: rgb(187,152,26);
            transition: width 0.3s ease-in-out;
          }
          .nav-link:hover::after {
            width: 100%;
          }
            .activemenuitem{
            color:'red';
            }
          @media (max-width: 768px) {
            .nav-link {
              display: inline-block;
            }
          }
        `}
      </style>
     
    </nav>
  );
}

export default Navbar;


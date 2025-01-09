import React, { useState,useEffect  } from 'react';
import { Link,useNavigate,useLocation} from 'react-router-dom'; 
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Button, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
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
    navigate('/auth'); 
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
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <div className={`collapse navbar-collapse ${isSidebarOpen ? 'show' : ''}`} id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schemes">Schemes</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}

<li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myapplicatons">My Applications Status</Link>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          {/* <button className="btn btn-outline-success" type="submit" onClick={() => navigate("/auth")}>Login</button> */}
          <Box>
            {isAuthenticated ? (
              <Box>
                <IconButton sx={{ color: '#FB404B' }} onClick={handleLogout}>
                  <PowerSettingsNewIcon />
                </IconButton>
              </Box>
            ) : (
              <Button
                sx={{
                  color: location.pathname === '/auth' ? '#F0F0F0' : '#0d2136',
                }}
                onClick={() => navigate('/auth')}
              >
                Login
              </Button>
            )}
          </Box>

         
        </div>
      </div>

     
    </nav>
  );
}

export default Navbar;

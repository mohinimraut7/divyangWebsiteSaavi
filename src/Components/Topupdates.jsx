
const Topupdates = () => {
    return (
      <>
        <div style={{ backgroundColor: '#1964AD', color: 'white',marginBottom:'20px' }} className="container-fluid">
          <div className="row">
            {/* Call us section - stacked on md and smaller, 3 columns on lg */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <span className="small-text">Call us +91-9999911111</span>
            </div>
            
            {/* Phone number section - stacked on md and smaller, 2 columns on lg */}
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <span className="small-text">+91-9999911111</span>
            </div>
  
            {/* Separator - hidden on md and smaller, displayed on lg */}
            <div className="col-lg-1 d-none d-lg-block">
              |
            </div>
            
            {/* Email section - stacked on md and smaller, 2 columns on lg */}
            <div className="col-lg-2 col-md-12 col-12">
              info@vvmm.in
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Topupdates;
  
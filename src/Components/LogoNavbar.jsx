import logo from '../assets/logo.jpg';
import secimglogo from '../assets/logonavsecimg.jpg';
import mahanagarpalikaapp from '../assets/mahanagarpalikaapp.png';
import amrutmahostav from '../assets/amrutmahostav.jpg';
import './styles/fontSizes.css';
import './LogoNavbar.css';
const LogoNavbar=()=>{
    return(
        <>
        <div className="container-fluid LNContainer" style={{border:'1px solid #fbfbfb'}}>
            <div className="row" >
                <div className="col-lg-5 col-md-12 logowithtext">
                    <img src={logo} height='80px' width='80px'/>
                    <p className='logo-title'>वसई - विरार शहर महानगरपालिका</p>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12 imgamrutmahostavdiv" style={{height:"1%"}}>
                    <img className="imgamrutmahostav" src={amrutmahostav} height='60%'width='60%'/>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12 secimglogodiv" style={{height:"1%"}}>
                    <img className="secimglogo" src={secimglogo} height='60%' width='60%'/>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 contactdiv">
                    
                    <div style={{fontWeight:'500',fontSize:'12px'}}>Contact Number</div>
                    <div><span style={{fontSize:'10px'}}>0250-6630000</span><span style={{fontSize:'10px'}}>0250-2525105/06</span></div>
                    <div><span style={{fontSize:'10px'}}>18002334353</span></div>
                   
                   
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 appdiv" style={{height:"1%"}}>
                <img src={mahanagarpalikaapp} height='30%' width='30%'/>
                <div style={{lineHeight:'12px'}}><span style={{fontSize:'9px'}}>महानगरपालिकेचे अधिकृत अँप (Vclick) डाउनलोड करण्याकरिता</span></div>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default LogoNavbar;
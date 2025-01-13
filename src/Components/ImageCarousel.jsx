import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = () => {
  return (

       <div className='container-fluid d-block w-100' style={{marginBottom:'30px'}}>
<div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500" >
      <div className="carousel-inner">
        <div className="carousel-item active">
       
          <img src="https://vvcmc.in/wp-content/uploads/2021/12/slide2.jpg" className="d-block w-100" alt="Image 1" />

        </div>
        <div className="carousel-item">
       
          <img src="https://vvcmc.in/wp-content/uploads/2021/12/IMG-20211231-WA0004.jpg" className="d-block w-100" alt="Image 2" />
        </div>
        <div className="carousel-item">
      
          <img src="https://vvcmc.in/wp-content/uploads/2021/12/IMG-20211231-WA0005.jpg" className="d-block w-100" alt="Image 3" />
        </div>
       
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    
  );
}

export default ImageCarousel;

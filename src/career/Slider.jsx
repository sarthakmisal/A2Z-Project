import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slider() {
    useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);
  
  return (
    <>
      <div className="container-fluid" data-aos="fade-up">
        <div className="row text-white">
          <div className="col-md-6" style={{ backgroundColor: 'black' }}>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
              <h1>Careers At <span className='color'>A2Z INFOTECH</span></h1>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <img src="career.jpg" alt="Career" className='w-100' />
          </div>
        </div>
      </div>
      <div className="container-fluid"  data-aos="fade-up">
        <div className="row">
            <div className="col-md-12 p-0 d-flex justify-content-center" style={{backgroundColor:'black'}}>
            <div className='col-9 mt-5 mb-5 text-center text-white'>
            <p className='fs-4'>At Forta, we believe in nurturing talent and innovation. Join us in software development and grow your career with a team committed to excellence and cutting-edge technology.</p>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Slider;

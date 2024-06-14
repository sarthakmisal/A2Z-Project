import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Unlock.css'; // Create this file for custom styles

function Unlock() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // duration of animations
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: 'black', overflow: 'hidden' }}>
        <div className='container pt-5 pb-5' style={{ backgroundColor: 'black' }}>
          <div className="row">
            <div 
              className="col-md-6 text-white mt-5 justify-content-center align-items-center" 
              data-aos="fade-right"
            >
              <h1 className='color'>Application</h1>
              <h1>Development</h1>
              <p className='fs-4'>
                Experience the power of <span className='color'> tailored application</span> development <br />
                that brings your <span className='color'> ideas to life.</span>
              </p>
              <p className='fs-4'>
                Step into <span className='color'>the future</span> of application development and <span className='color'> unlock limitless possibilities </span>for your <span className='color'> business.</span>
              </p>
            </div>
            <div 
              className="col-md-6"
              data-aos="fade-left"
            >
              <img src="https://www.a2zithub.org//assets/img14.png" alt="" className='xyzimage' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Unlock;

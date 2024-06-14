import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CourseValue.css'; 

function CourseValue() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="container-fluid text-white course-value-container"  data-aos="fade-up">
      <div className="row">
        <div className="col-md-6 bordered content-box">
          <h1>We Enhance The Journey.</h1>
        </div>
        <div className="col-md-6 icon-container">
          <i className="fa-solid fa-location-dot fs-1 color icon"></i>
        </div>
        <div className="col-md-6 icon-container">
          <i className="fa-solid fa-users fs-1 color icon"></i>
        </div>
        <div className="col-md-6 bordered content-box">
          <h1>We Are Stronger Together.</h1>
        </div>
        <div className="col-md-6 bordered content-box">
          <h1>We Pursue Together.</h1>
        </div>
        <div className="col-md-6 icon-container">
          <i className="fa-solid fa-trophy fs-1 color icon"></i>
        </div>
        <div className="col-md-6 icon-container">
          <i className="fa-solid fa-heart-circle-plus fs-1 color icon"></i>
        </div>
        <div className="col-md-6 bordered content-box">
          <h1>We Are Helpful.</h1>
        </div>
      </div>
    </div>
  );
}

export default CourseValue;

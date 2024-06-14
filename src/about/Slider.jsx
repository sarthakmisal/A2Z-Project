import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';
import axios from 'axios';

function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);


  var [da,daSet] = useState();
    useEffect(()=>{
        useload();
        console.log(da)
    },[])
    var useload=async()=>{
      //  var res=await axios.get('http://localhost:1000/admin/projectapi');
      var res = await axios.get('http://localhost:5000/about_sliderapi')
       daSet(res.data)
    }
    console.log(da);
  return (
    <div className="container-fluid slider-container" data-aos="fade-up">
       {da&&da.map((item)=>{
                return(
                    <>
      <div className="row slider-row">
        <div className="col-md-6 slider-image-column">
          <img src={`http://localhost:5000/uploads/${item.about_slider_img}`} className="slider-image" alt="About" />
        </div>

       
        <div className="col-md-6 slider-content-column">
          <div className="slider-content">
            <h3 className="slider-heading">{item.slider_heading}</h3>
            <h1 className="slider-title color" >{item.about_slider_heading}</h1>
            <p className="slider-description">
              {item.about_slider_desc}
              {/* At A2Z IT Hub, we believe in unleashing the <span className="color">full potential</span> of technology to drive your <span className="color">business forward.</span> With our expertise and innovative solutions, we empower you to stay ahead of the competition and <span className="color">achieve remarkable success.</span> */}
            </p>
          </div>
        </div>
      
        
      </div>
      </>
                )
        })};
    </div>
  );
}

export default Slider;
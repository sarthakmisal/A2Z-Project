import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Unlock() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div style={{backgroundColor:'black',overflow:'hidden'}} data-aos="fade-up">
    <div className='container pt-5 pb-5' style={{backgroundColor:'black'}}>
        <div className="row">
            <div className="col-md-6 d-flex text-white justify-content-center align-items-center">
                <p className='fs-2'><span className='fs-1 color fw-bold'>Unlock</span> the power of innovation with our <br /> cutting-edge <span className='color'>website</span> and <span className='color'>software</span> solution</p>
            </div>
            <div className="col-md-6 alksdfj">
                <img src="https://www.a2zithub.org/assets/img10.png" alt="" />
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default Unlock
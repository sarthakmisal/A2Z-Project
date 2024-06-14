import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: 'black' }}>
      <div className="row p-0">
        <div className="col-md-12 p-0">
          <footer className="text-center text-white mt-4">
            <div className="d-flex flex-wrap justify-content-center">
              <p className='m-3'>
                <i className='fa fa-facebook text-white me-2'></i>Facebook
              </p>
              <p className='m-3'>
                <i className='fa fa-whatsapp text-white me-2'></i>Whatsapp
              </p>
              <p className='m-3'>
                <i className='fa fa-linkedin text-white me-2'></i>Linkedin
              </p>
              <p className='m-3'>
                <i className='fa fa-instagram text-white me-2'></i>Instagram
              </p>
              <p className='m-3'>
                <i className='fa fa-phone text-white me-2'></i>Call Now
              </p>
              <p className='m-3'>
                <i className='fa fa-envelope text-white me-2'></i>Mail
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;

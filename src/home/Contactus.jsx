// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import { useEffect } from 'react';

    function Contactus() {
        useEffect(() => {
          AOS.init({
            duration: 1000, // duration of animations
          });
        }, []);
    return (
        <div className="container-fluid" style={{backgroundColor:'black'}} data-aos="fade-up">
            <div className="row">
                <div className="col-md-12">
                    
            <header className="text-center my-4 text-white">
                <h1 className='color'>Contact Us</h1>
                <p className="lead">We would love to hear from you!</p>
            </header>
            </div>
            <div className="col-md-6 p-5 text-white">
                <div className='d-flex justify-content-center align-item-center'>
                <img src="https://miro.medium.com/v2/resize:fit:450/1*fef2C8idyUIc-rn2kVLh6w.png" width={100} alt="" className='rounded-circle' />
                </div>
                <div className='d-flex justify-content-center align-item-center'>
                <h1 className='color '>We're here to listen.</h1>
                </div>
                <div className='d-flex justify-content-center align-item-center'>
                <h4>Contact us and experience our exceptional service.</h4>
            </div>
            </div>
            <div className="col-md-6 p-5">

            <div className="contact-container mx-auto text-white">
                <form action='http://ec2-16-171-133-93.eu-north-1.compute.amazonaws.com:5000/contact-us' method='post'>
                    <div className="form-group ">
                        <label htmlFor="name">Enter Your Name</label>
                        <input type="text" className="mt-2 w-100 p-2 rounded landmarkcard22" id="Enter Your Name" name="name" required placeholder='Name'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Enter Your Email</label>
                        <input type="email" className="mt-2 mb-1 w-100 p-2 rounded  landmarkcard22" id="email" name="email" required placeholder='Enter Your Email'/>
                    </div>
                    <div className="form-group">    
                        <label htmlFor="subject">Enter your Subject</label>
                        <input type="text" className="mt-2 mb-1 w-100 p-2 rounded  landmarkcard22" id="subject" name="subject" required placeholder='Enter your Subject'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Enter Your Message</label>
                        <textarea className="mt-2 mb-1 w-100 p-2 rounded  landmarkcard22" id="message " name="message" rows="5" required placeholder='Enter Your Message'></textarea>
                    </div>
                    <div className='text-center'>
                    <button type="submit" className="btn btn-outline-light btn-block mt-2">Send Message</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Contactus;

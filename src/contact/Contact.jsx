import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const [Contact, setContact] = useState([])
    useEffect(()=>{
      fetch("http://ec2-16-171-133-93.eu-north-1.compute.amazonaws.com:5000/get_contacts").then(res=>res.json()).then(data=>setContact(data))
    })
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  useEffect(()=>{
    // console.log(Contact)
    Contact.map((ele,ind)=>console.log(ele))
  })
    return (
      <>
        {Contact.length > 0 ? (
          Contact.map((element, index) => (
            <div className="container-fluid" data-aos="fade-up">
              <div className="row" style={{ backgroundColor: "black" }}>
                <div className="col-md-6 text-center mt-5 text-white">
                  <img
                    src="https://www.a2zithub.org/assets/location.png"
                    width={100}
                    alt=""
                  />
                  <p className="color fs-2">{element.quote1}</p>
                  <p className="fs-4">{element.quote2}</p>
                  <p className="fs-4">{element.quote3}</p>
                </div>
                <div className="col-md-6 text-center p-4 text-white">
                  <p className="color fs-1 fw-bold text-decoration-underline mt-3">
                    {element.title}
                  </p>
                  <p className="text-decoration-justify ps-5 pe-5">
                    {element.description}
                  </p>
                  <p>{element.dialogue}</p>
                  <div className="row">
                    <div className="col-sm-6 text-start d-flex">
                      <div>
                        <i class="fa-solid fa-location-dot fs-4 color me-2"></i>
                      </div>
                      <div>
                        <span className="mb-2">{element.address}</span>
                      </div>
                    </div>
                    <div className="col-sm-6 d-flex text-start">
                      <div>
                        <i className="fa fa-phone color me-2 fs-4"></i>
                      </div>
                      <div>{element.phone}</div>
                    </div>
                    <div className="col-sm-6 d-flex text-start mt-4">
                      <div>
                        <i class="fa-solid fa-envelope color me-2 fs-4"></i>
                      </div>
                      <div>{element.email}</div>
                    </div>
                    <div className="col-sm-6 d-flex text-start mt-4">
                      <div>
                        <i class="fa fa-linkedin color me-2 fs-4"></i>
                      </div>
                      <div>{element.link}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 p-0">
                  <iframe
                    src={element.map}
                    width="600"
                    height="450"
                    style={{ width: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="rounded p-5 border shadow mt-5 mb-5 bg-dark"
                  ></iframe>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-danger text-center">Loading...</h1>
        )}
      </>
    );
}

export default Contact
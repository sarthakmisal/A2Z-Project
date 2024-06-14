import React, { useEffect, useState } from "react";
import "./corevalues.css"; // Assuming you have your custom CSS file for styling
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file for animations
import axios from "axios";

function Corevalues() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  var [da, daSet] = useState([]);
  useEffect(() => {
    useload();
    console.log(da);
  }, []);
  var useload = async () => {
    //  var res=await axios.get('http://localhost:1000/admin/projectapi');
    var res = await axios.get("http://ec2-16-171-133-93.eu-north-1.compute.amazonaws.com:5000/about_ourapi");
    daSet(res.data);
  };
  console.log(da);
  return (
    <>
      <div
        className="container-fluid core-values-container"
        style={{ backgroundColor: "black" }}
      >
        <h1 className="text-center color">Our Core Values</h1>
        <div className="container">
          <div className="row">
            {da.length > 0 ? (
              da.map((value, index) => (
                <div className="col-md-4 mb-5" key={index} data-aos="fade-up">
                  <div
                    className="card corecard p-5 text-center text-white"
                    style={{ backgroundColor: "black" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title color">
                        {value.about_our_heading}
                      </h5>
                      <p className="card-text">{value.about_our_desc}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>hello</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Corevalues;

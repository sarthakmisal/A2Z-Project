import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./mission.css";
import axios from "axios";

function Missionvision() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  var [da, daSet] = useState();
  useEffect(() => {
    useload();
    console.log(da);
  }, []);
  var useload = async () => {
    // var res = await axios.get('http://localhost:5000/about_sliderapi')
    var res = await axios.get("http://ec2-16-171-133-93.eu-north-1.compute.amazonaws.com:5000/miss_visapi");
    daSet(res.data);
  };
  console.log(da);

  return (
    // {da&&da.map((item)=>{
    //   return(
    //       <>
    <div
      className="deck d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        backgroundImage: "url('https://a2zithub.org/assets/img22.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
      }}
    >
      <div className="card-space">
        {da &&
          da.map((item) => {
            return (
              <>
                <div className="card asdf m-5">
                  <div className="card-body"></div>
                  <div className="face front d-flex justify-content-center align-items-center text-center">
                    <h1 className="color">Our Mission</h1>
                  </div>

                  <div className="face back d-flex justify-content-center align-items-center text-center text-white">
                    <p className="fs-5">{item.about_miss}</p>
                  </div>
                </div>
              </>
            );
          })}
        ;
      </div>

      <div className="card-space">
        {da &&
          da.map((item) => {
            return (
              <>
                <div className="card asdf  m-5">
                  <div className="face front d-flex justify-content-center align-items-center text-center">
                    <h1 className="color">Our Vision</h1>
                  </div>
                  <div className="face back d-flex justify-content-center align-items-center text-center text-white">
                    <p className="fs-5">
                      {item.about_vis}
                      {/* Our vision is to make a significant and<span className='color'>positive impact</span>  on the businesses we serve, helping them harness the full potential of technology and navigate the ever-evolving digital landscape with<span className='color'>confidence</span> and <span className='color'>success.</span> */}
                    </p>
                  </div>
                </div>
                {/* </div> */}
              </>
            );
          })}
        ;
      </div>
    </div>
    //     </>
    //   )
    // })};
  );
}

export default Missionvision;

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './client.css';
import axios from 'axios';

function Client() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  var [da, daSet] = useState([]);
  var [ds, dsSet] = useState([]);

  useEffect(() => {
    useload();
    console.log(da)
  }, [])
  var useload = async () => {
    //  var res=await axios.get('http://localhost:1000/admin/projectapi');
    var res = await axios.get('http://localhost:5000/ourClientapi')
    daSet(res.data)
    var era = await axios.get('http://localhost:5000/aboutEndapi')
    dsSet(era.data)
  }
  console.log(da);
  return (
    <>
      <div className="container-fluid xyzb" style={{ backgroundColor: 'black' }} data-aos="fade-up">
        <div className="row">

          {da && da.map((item) => {
            return (
              <>
                <div className="container rounded text-white">
                  <h1 className=" text-center color">OUR BEST CLIENT:</h1>
                  <p className='col-4 text-center' style={{ "marginLeft": "420px" }}>{item.client_info}</p>
                  <p className='text-center color fw-bold text-decoration-underline'>{item.client_name}</p>
                  <p className='text-center'>( {item.client_pos} )</p>
                </div>
              </>
            )
          })};
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: 'black' }} data-aos="fade-up">
        <div className="row">
          <div className="col-md-12">
            <div className="sliderabc mt-5">
              <div className="logos d-flex">
                {ds.length > 0 ? (
                  ds.map((item) => (
                    <>
                      <img src={`http://localhost:5000/uploads/${item.img}`} alt="" className='rounded shadow' style={{ width: '100px' }} />
                      {/* <img src="https://a2zithub.org/assets/rnempire.png" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/shingavi.jpg" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/global_logo2.jpeg" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/SBTL%20logo-02.png" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/nirmal.png" alt="" className='rounded shadow' style={{width:'200px'}} />
              <img src="https://a2zithub.org/assets/167783776522983034.jpeg" alt="" className='rounded shadow' style={{width:'200px'}} /> */}
                    </>
                  ))
                ) : (
                  <h1 className='text-danger bg-white'>hello</h1>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}

export default Client;
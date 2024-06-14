import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Shareresume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className="container-fluid text-white" style={{backgroundColor:'black'}}  data-aos="fade-up">
        <div className="row pt-5 pb-5">
            <div className="col-md-6 p-3">
            <img className='p-4' src="https://img.freepik.com/free-vector/modern-resume-template_23-2147836674.jpg?w=740&t=st=1717651549~exp=1717652149~hmac=2ed59fd7c113ec98dc16ad3a80793f3d501f9e7a0e2855f2a1a03f1c361129d8" 
            style={{width:'100%',height:'400px',boxShadow:'0px 0px 5px 1px white'}} alt="" />
            </div>
            <div className="col-md-6 pt-5">
                
                <h1>Your Next Adventure Awaits</h1>
                <h1 className='color'>Share Your Resume </h1>
                <h1>info@a2zithub.org</h1>
            </div>
        </div>
    </div>
    <div>
    </div>
    
    </>
  )
}

export default Shareresume
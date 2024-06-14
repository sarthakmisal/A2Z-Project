import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurCulture.css'; 

function OurCulture() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="container-fluid text-white our-culture-container" data-aos="fade-up">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className='color'>Our Culture</h1>
          <div className='d-flex justify-content-center'>
            <hr className='rounded-pill custom-hr' />
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h3 className='fw-bold'>Great Software And Services Start With Great People</h3>
              <h6 className='fw-bold color'>Successful software development hinges on the talent and dedication of the team. Key factors include:</h6>
              <ul className="list-unstyled">
                <li className='text-start check'>Talent and Expertise: Skilled professionals ensure high standards in every aspect of software.</li>
                <li className='text-start check'>Collaboration: Open communication and teamwork foster innovation and swift problem-solving.</li>
                <li className='text-start check'>Passion: Dedicated individuals go above and beyond to exceed user expectations.</li>
                <li className='text-start check'>Customer Focus: Prioritizing user needs leads to intuitive and valuable software.</li>
                <li className='text-start check'>Innovation: Creative thinking pushes the boundaries and differentiates products.</li>
                <li className='text-start check'>Resilience: Resourceful team members navigate challenges and maintain project momentum.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="https://media.istockphoto.com/id/469066878/photo/happy-hispanic-teacher-assisting-high-school-students-with-computers.jpg?s=2048x2048&w=is&k=20&c=Co14Ujk4N_DP9Il2rFwVW8ebHQEC9bnGaKa1p-fnLNc=" style={{opacity:'0.5'}} className='img-fluid p-5 custom-img' alt="Team Collaboration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCulture;

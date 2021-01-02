import React from 'react'
import HotelImg from '../../img/Hotel.png';
import Github from '../../img/Github.png';
import Contact from '../../img/Contacts.png';

export const WorkSection = () => {
  return (
    
    <div id="about-b" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">Some of my works</h2>
        <div className="bottom-line"></div>
        
        <div className="about-info">
          <img src={Github} alt="" className="bio-image1"/>
          <div className="bio bg-light" id="bio">
            <h4>Github Retriver</h4>
            <p> Developed an frontend Github search application in reactjs,where we can search for github users and It is developed in such a way that axios will retrieve the users data
              and project it as a result.
            </p>
          </div>
        </div>

        <div className="about-info">
          <img src={Contact} alt="" className="bio-image1"/>
          <div className="bio bg-light" id="bio">
            <h4>Contact Holder</h4>
            <p>Developed a full stack application of Contact Holder using reactjs, nodejs, mongodb as backend service where user can register for an application and logs in and can save the contacts.
             I have used bcrypt to salt the password which helps in maintaining the passwords of users securely.
            </p>
          </div>
        </div>
        <div className="about-info padding-fix">
          <img src={HotelImg} alt="" className="bio-image1"/>
          <div className="bio bg-light" id="bio">
            <h4>Hotel website</h4>
            <p>Developed a small Hotel frontend website with few basic pages like Home, About, Contact. This website frontend is developed using html,css,javascript (ES6). 
            </p>
          </div>
  
        </div>
      </div>

    </div>
    
  )
}

export default WorkSection;
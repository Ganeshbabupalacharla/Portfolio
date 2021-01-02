import React,{Fragment} from 'react'
import Aboutjpg from '../../img/About.jpg';
import Microsoft from '../../img/Microsoft.PNG';
import html5 from '../../img/html5.png';
import css from '../../img/css.png';
import js from '../../img/js.png';
import mysql from '../../img/mysql-1-logo-black-and-white.png';

export const Aboutsection = () => {
  return (
    <Fragment>
      <section id="about-a" className="text-center py-3">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="bottom-line"></div>
              <p className="lead">Let me tell you about myself and what i do</p>
              <div className="about-info">
                <img src={Aboutjpg} alt="" className="bio-image"/>
                <div className="bio bg-light" id="bio">
                  <h4>A Small Bio</h4>
                  <p>Myself, Ganesh Palacharla graduating from University of New Haven with Masters in Computer Science(3.98GPA). At present Iam looking for
                    Full time opportunities in UI/Full stack.
                    Coming to my domain of interest, Iam very much interested in designing and developing websites.
                    Hopefully will be working with you soon. Cheers!!!
                  </p>
                </div>
              </div>

              <h2 className="section-title">Certification</h2>
              <div className="bottom-line"></div>
              <div className="about-info">
                <img src={Microsoft} alt="" className="bio-image"/>
                <div className="bio bg-light" id="bio">
                  <h4>Microsft Azure Az-900</h4>
                  <p>This certification helped me in exploring more cloud topics like Azure Services, Azure Security, Networking, Support, Storage, Compute etc...
                  </p>
                </div>
              </div>

              <h2 className="section-title">Technical Skills</h2>
              <div className="bottom-line"></div>
              <div className="about-skills">
                <div className="skills1" >
                  <h4>Programming Languages</h4>
                  <div className="bottom-line"></div>
                  <ul>
                    <li>html5</li>
                    <li>CSS3</li>
                    <li>JavaScript(ES6)</li>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="skills2" >
                  <h4>Frameworks</h4>
                  <div className="bottom-line"></div>
                  <ul>
                    <li>Reactjs</li>
                    <li>Nodejs</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div className="skills3" >
                  <h4>Tools and Databases</h4>
                  <div className="bottom-line"></div>
                  <ul>
                    <li>VS code</li>
                    <li>Postman</li>
                    <li>mysql</li>
                    <li>mongodb</li>
                  </ul>
                </div>
              </div>

          </div>

        </section>
        <section id=".about-c" className="py-2 bg-light">
        <div className="container">
          <div className="about-logos">
            <img src={html5} alt=""/>
            <img src={css} alt=""/>
            <img src={js} alt=""/>
            <img src={mysql} alt=""/>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Aboutsection

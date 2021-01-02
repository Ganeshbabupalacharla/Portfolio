import React,{Fragment}from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';
import HomeSection from '../layouts/HomeSection'

import Typical from 'react-typical'

export const Home = () => {
  return (
    <Fragment>
      <div className="header-home">
        <div className="container">
          <div className="main-nav">
            <img src={Logo} alt="MY Portfolio" id="logo"/>
            <ul>
              <li><Link to='/'  className="current Link">HOME</Link></li>
              <li><Link to='/about'className="Link">ABOUT</Link></li>
              <li><Link to='/work' className="Link">WORK</Link></li>
              <li><Link to='/contact' className='Link'>CONTACT</Link></li>
            </ul>
          </div>
          <div className="header-content">
            <h1>Ganesh Palacharla - <Typical
                steps={['Full Stack Developer',3000,'UI/UX Developer',3000]}
                loop={Infinity}
                wrapper="b"/>
            </h1>
            <p className="lead">I specialise in UI/UX</p>
            <Link to='/Work'className="btn-light Link" >View My Work</Link>
          </div>
        </div>
      </div>

      <HomeSection/>
      
    </Fragment>
  )
};
export default Home;
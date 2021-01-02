import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png'

export const Navbar = (props) => {
  return (

    <Fragment>
      <div id="header-inner">
        <div className="container">
          <div className="main-nav">
            <img src={Logo} alt="MY Portfolio" id="logo"/>
              <ul>
              <li><Link to='/'  className="Link">Home</Link></li>
              <li><Link to='/about'className="Link">ABOUT</Link></li>
              <li><Link to='/work' className="Link">WORK</Link></li>
              <li><Link to='/contact' className="Link">CONTACT</Link></li>
              </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default Navbar;

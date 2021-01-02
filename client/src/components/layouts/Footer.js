import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer id="main-footer" >
        <div className="footer-content container">
          <p>Copyright &copy; 2020. All Rights Reserved</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/ganesh-palacharla-6b64751b8"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/ganesh_palacharla/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;


    // "server":"nodemon server.js",
    // "client":"npm start --prefix client",
    // "client-install":"npm install --prefix client",
    // "dev":"concurrently \"npm run server\" \"npm run client\"",
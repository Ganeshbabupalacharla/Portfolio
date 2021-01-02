import React,{Fragment} from 'react'

export const HomeSection = () => {
  return (
    <Fragment>
      <section id="home-a" className="text-center py-2">
    <div className="container">
      <h2 className="section-title">I Specialize In</h2>
      <div className="bottom-line"></div>
      <p className="lead">
        UI layouts and full stack development
      </p>
      <div className="specials">
        <div className="Ui">
          <i className="fas fa-desktop fa-2x"></i>
          <h3>UI</h3>
          <p>Good at designing interfaces that will catch the eye of an user
            
          </p>
        </div>
        <div className="fullstack">
          <i className="fas fa-object-ungroup fa-2x"></i>
          <h3>FULL STACK</h3>
          <p>
            Dedicated and efficient full stack developer with good knowledge in developing and maintaining both client and server sides.
          </p>
        </div>
      </div>
    </div>
  </section>
    </Fragment>
  )
}

export default HomeSection;
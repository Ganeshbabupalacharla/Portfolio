import React from 'react'

const Alert = ({alert,type}) => {
  return (
    alert!==null &&(
      <div className={`alert alert-${type}`}>
        <i className="fas fa-info-circle"></i> {alert}
      </div>
    )
  )
}

export default Alert;
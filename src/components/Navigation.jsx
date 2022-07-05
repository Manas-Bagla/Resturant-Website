import React from 'react'
import nav from  "./nav.css"

const Navigation = () => {
  return (
    <div className='Navigation'>
    <nav className="navbar  navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#mainSec">Resturant</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#mainSec">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutSec">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactSec">Contact Us</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation

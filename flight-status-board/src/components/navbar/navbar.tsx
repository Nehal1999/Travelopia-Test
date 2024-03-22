import React from "react";
import logo from '../../assets/images/travelopia_logo.jpeg';

const NavbarComponent = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{marginBottom : "20px",backgroundColor : '#e3f2fd'}}>
        <div className="container">
          <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/> Travelopia
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/flights">Flights</a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default NavbarComponent;

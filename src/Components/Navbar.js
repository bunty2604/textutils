import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const navStyle = {
    backgroundColor: props.mode === 'light' ? '#186af6' : '#121212',
    color: 'white'
  };

  const linkStyle = {
    color: 'white'
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={navStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={linkStyle}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={linkStyle}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={linkStyle}>About</Link>
              </li>
             
          
            </ul>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault" style={linkStyle}>Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary py-1`} data-bs-theme={props.themeMode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </div>
        </div>
        <div className="d-flex">
          <button className="btn btn-primary rounded mx-2" onClick={()=>{props.toggleThemeMode('primary')}} style={{height: "30px", width:"30px"}}></button>
          <button className="btn btn-success rounded mx-2" onClick={()=>{props.toggleThemeMode('success')}} style={{height: "30px", width:"30px"}}></button>
          <button className="btn btn-danger rounded mx-2" onClick={()=>{props.toggleThemeMode('danger')}} style={{height: "30px", width:"30px"}}></button>
          <button className="btn btn-warning rounded mx-2" onClick={()=>{props.toggleThemeMode('warning')}} style={{height: "30px", width:"30px"}}></button>
        </div>
        <button className={`btn btn-${props.themeMode === "light" ? "dark" : "light"}`} onClick={()=>{props.toggleThemeMode(null)}} >{props.btnText}</button>
      </div>
  </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
Navbar.defaultProps = { title: "Your Title Here", aboutText: "About Text Here" };
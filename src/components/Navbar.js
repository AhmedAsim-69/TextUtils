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
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </div>
        </div>
        <button className={`btn btn-${props.themeMode === "light" ? "dark" : "light"}`} onClick={props.toggleThemeMode} >{props.btnText}</button>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
      </div>
  </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
Navbar.defaultProps = { title: "Your Title Here", aboutText: "About Text Here" };
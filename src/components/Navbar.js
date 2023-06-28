import React, {useState} from "react";
import PropTypes from 'prop-types'


export default function Navbar(props) {
  const [themeMode, setThemeMode] = useState({
    mode : "light",
    color: "white",
    backgroundColor: "black"
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const [navTheme, setnavTheme] = useState("light")

  const toggleThemeMode = ()=>{
    if(themeMode.mode === "light"){
      setThemeMode({
        mode: "dark",
        color: "black",
        backgroundColor: "white"
      })
      setnavTheme("dark")
      setBtnText("Enable Light Mode")
    }
    else{
      setThemeMode({
        mode: "light",
        color: "white",
        backgroundColor: "black"
      })
      setnavTheme("light")
      setBtnText("Enable Dark Mode")
      
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-1"data-bs-theme={navTheme}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/">Features</a>
            <a className="nav-link" href="/">Pricing</a>
            <a className="nav-link disabled" href="/">Disabled</a>
            <a className="nav-link" href="/">{props.aboutText}</a>
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </div>
        </div>
        <button className="btn btn-light" style={themeMode} onClick={toggleThemeMode}>{btnText}</button>
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
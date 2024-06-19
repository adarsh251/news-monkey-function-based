import React, { Component } from "react";
import { Link } from "react-router-dom";
function NavBar(props){
      return(<div className="navigation">
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.style.theme=== "light" ? "#ECECEC" : "#171717"}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color: props.style.color}}>
              NewMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/" style={{color:props.style.color}}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/business" style={{color:props.style.color}}>Business</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/entertainment" style={{color:props.style.color}}>Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/general" style={{color:props.style.color}}>General</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/health" style={{color:props.style.color}}>Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/science" style={{color:props.style.color}}>Science</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/sports" style={{color:props.style.color}}>Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/technology" style={{color:props.style.color}}>Technology</Link></li>
              </ul>
            </div>
            <button
              type="button"
              className={`btn btn-${props.style.theme === "light" ? "dark" : "light"}`}
              onClick={props.toggleFn}
              style={{ backgroundColor: props.style.theme === "light" ? "black" : "white", color: props.style.theme === "light" ? "white" : "black" }}
            >
              Enter {props.style.theme === "light" ? "dark" : "light" } mode
            </button>
          </div>
        </nav>
      </div>)
    
}

export default NavBar;

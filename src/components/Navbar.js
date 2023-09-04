import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    let { mode, toggleMode, currentMode } = this.props;
    return (
      <nav
        className={`navbar navbar-expand-lg ${
          mode === "light" ? "navbar-light" : "navbar-dark"
        } ${mode === "light" ? "bg-primary" : "bg-dark"}`}
      >
        <a className="navbar-brand" href="#">
          Daily News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">
              Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/entertainment">
              Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/health">
              Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/science">
              Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sports">
              Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/technology">
              Technology
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toggleMode}
              />
              <label
                className={`form-check-label text-${
                  mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {currentMode}
              </label>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;

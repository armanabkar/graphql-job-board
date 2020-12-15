import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    const { loggedIn, onLogout } = this.props;
    if (loggedIn) {
      return (
        <nav className="navbar">
          <div className="navbar-start">
            <Link className="navbar-brand" to="/">
              <p className="card-header-title">React Job Board</p>
            </Link>
            <Link className="navbar-item navbar-item-mob" to="/jobs/new">
              Post Job
            </Link>
            <Link className="navbar-item navbar-item-mob" to="/about">
              About
            </Link>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="navbar-item navbar-item-mob" onClick={onLogout}>
              Logout
            </a>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar">
          <div className="navbar-start">
            <Link className="navbar-brand" to="/">
              <p className="card-header-title">React Job Board</p>
            </Link>
            <Link className="navbar-item navbar-item-mob" to="/login">
              Login
            </Link>
            <Link className="navbar-item navbar-item-mob" to="/about">
              About
            </Link>
          </div>
        </nav>
      );
    }
  }
}

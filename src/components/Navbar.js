import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
function Navbar(props) {
  const firebase = useFirebase();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://i.ibb.co/M5Fwx9F/student-1.png"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            ></img>
            Student Square
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/studentform" className="btn btn-danger">
                  Add Student
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img height="30px" src="https://i.ibb.co/G5Xg2rB/user.png" />
                  <span className="ms-2 navbar-text">Arbaz Ur Rahman</span>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => firebase.logout()}
                    >
                      Logout
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ads
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

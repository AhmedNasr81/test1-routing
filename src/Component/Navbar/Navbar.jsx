
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'; 
export default function Navbar() {
  return (
    <>
<nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
        <div className="container">
        <Link className="navbar-brand fs-2 fw-bold text-white" to={""}>
  Start Framework
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-5">
              <li className="nav-item px-3">
                <NavLink
                  className={`${styles.navLink}`}
                  to={"about"} 
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink
                  className={`${styles.navLink}`}
                  to={"portfolio"}  
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink
                  className={`${styles.navLink}`}
                  to={"contact"}  
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

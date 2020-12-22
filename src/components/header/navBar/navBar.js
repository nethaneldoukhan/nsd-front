import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "bulma/css/bulma.min.css"
import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import './navBar.css'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const user = false
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <ul className="navbar-start">
            <li className="navbar-li">
              <hr />
              <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
                דף הבית
              </NavLink>
            </li>

            <li className="navbar-li">
              <hr />
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/services"
              >
                שירותים
              </NavLink>
            </li>

            <li className="navbar-li">
              <hr />
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/contact"
              >
                אודות
              </NavLink>
            </li>
          </ul>

          <div className="navbar-end">
            <div className="navbar-item">
              {/* <div className="buttons"> */}
              {user ? (<div>aa</div>) : (
              <Button variant="contained" color="default" className="button-custom-link">
                <NavLink
                  // className="navbar-item"
                  // activeClassName="is-active"
                  to="/signin"
                >
                  <LockOutlinedIcon fontSize="inherit" viewBox="8 -6 1 28" /> 
                  כניסה ללקוחות
                </NavLink>
                {/* <a >כניסה ללקוחות</a> */}
                </Button>
                )}
                {/* <a className="button is-white">כניסה ללקוחות</a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
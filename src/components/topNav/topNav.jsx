import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../img/logo/logo.png";
const TopNav = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link pr-0"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="media align-items-center">
                    {/* <span className="avatar avatar-sm rounded-circle">
                      <img alt="Logo" src="" />
                    </span> */}
                    <div className="media-body  ml-2  d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">
                        <img alt="logo" src={logo} />
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="mb-0 text-md  font-weight-bold">
                        BUSINESS CLARITY ANALYSIS SYSTEM
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center  ml-md-auto ">
              {isAuth ? (
                <></>
              ) : (
                <>
                  <Link to="/login">
                    <li className="nav-item dropdown">
                      <a href className="nav-link">
                        log in
                      </a>
                    </li>
                  </Link>
                  or
                  <Link to="/register">
                    {" "}
                    <li className="nav-item dropdown">
                      <a href className="nav-link">
                        register
                      </a>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default TopNav;

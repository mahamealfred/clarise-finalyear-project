import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../dataStore/util/logout/action/logout";
import { useDispatch } from "react-redux";
const SideBar = () => {
  const isAuth = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  const dispatch = useDispatch();
  return (
    <>
      <nav
        className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div className="scrollbar-inner">
          <div className="navbar-inner">
            <div
              className="collapse navbar-collapse"
              id="sidenav-collapse-main"
            >
              <ul className="navbar-nav">
                <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="ni ni-tv-2 text-primary"></i>
                      <span className="nav-link-text">Dashboard</span>
                    </a>
                  </li>
                </Link>
                {isAuth && userType === "admin" ? (
                  <>
                    <Link to="newCategory">
                      <li className="nav-item">
                        <small className="nav-link" href="#" target="_blank">
                          <i class="fas fa-business-time text-primary"></i>
                          <span className="nav-link-text">
                            Business Category
                          </span>
                        </small>
                      </li>
                    </Link>
                    <Link to="businessIdeaReport">
                      <li className="nav-item">
                        <small className="nav-link" href="#" target="_blank">
                          <i class="fab fa-ideal text-primary"></i>
                          <span className="nav-link-text">Business Ideas </span>
                        </small>
                      </li>
                    </Link>
                    <Link to="businessCatReport">
                      <li className="nav-item">
                        <small className="nav-link" href="#" target="_blank">
                          <i class="fab fa-ideal text-primary"></i>
                          <span className="nav-link-text">Business Category Report </span>
                        </small>
                      </li>
                    </Link>

                    <Link to="usersList">
                      <li className="nav-item">
                        <small className="nav-link" href="#" target="_blank">
                          <i class="fas fa-users text-primary"></i>
                          <span className="nav-link-text">Users List</span>
                        </small>
                      </li>
                    </Link>
                    <Link to="RejectedIdeasAnalysis">
                      <li className="nav-item">
                        <small className="nav-link" href="#" target="_blank">
                          <i class="fab fa-ideal text-primary"></i>
                          <span className="nav-link-text">
                            Rejected Ideas Analysis
                          </span>
                        </small>
                      </li>
                    </Link>
                  </>
                ) : (
                  <></>
                )}
                {isAuth && userType === "user" ? (
                  <Link to="newBusinessIdea">
                    <li className="nav-item">
                      <small className="nav-link" href="#" target="_blank">
                        <i className="ni ni-spaceship"></i>
                        <span className="nav-link-text">new Business Idea</span>
                      </small>
                    </li>
                  </Link>
                ) : (
                  <></>
                )}
              </ul>

              <hr className="my-3" />

              <h6 className="navbar-heading p-0 text-muted">
                <span className="docs-normal">Account</span>
              </h6>

              <ul className="navbar-nav mb-md-3">
              <Link to="myAccount">
                <li className="nav-item">
                  <span className="nav-link" href="" target="_blank">
                    <i class="far fa-question-circle text-primary"></i>
                    <span className="nav-link-text">My Account Info</span>
                  </span>
                </li>
                </Link>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i class="far fa-user-circle text-primary"></i>
                    <span className="nav-link-text">my account</span>
                  </a>
                </li> */}
                <Link to="">
                  <li
                    onClick={() => {
                      dispatch(logout);
                    }}
                    className="nav-item"
                  >
                    <small className="nav-link" href="#" target="_blank">
                      <i className="ni ni-ui-04 text-primary"></i>
                      <span className="nav-link-text">LogOut</span>
                    </small>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default SideBar;

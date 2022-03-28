import React, { useState } from "react";
import { login } from "../../dataStore/util/login/action/login";
import { useDispatch, useSelector } from "react-redux";
import PopUpFeed from "../../components/popup/popup";
const Login = () => {
  const feedback = useSelector((state) => state.LoginReducer);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(userName, password));
  };
  return (
    <>
      {/* <!-- Main content --> */}

      {/* <!-- Header --> */}
      <body class="bg-default">
        <div className="header bg-gradient-primary py-7 py-lg-6 pt-lg-6">
          <div className="container">
            <div className="header-body text-center mb-7"></div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className="container mt--8 pb-5 ">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary border-0 mb-0">
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>logIn or Register</small>
                  </div>
                  <form role="form" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <div
                        className="
                        input-group input-group-merge input-group-alternative
                      "
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="userName"
                          type="text"
                          value={userName}
                          onChange={(event) => setUserName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div
                        className="
                        input-group input-group-merge input-group-alternative
                      "
                      >
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-lock-circle-open"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className="
                      custom-control custom-control-alternative custom-checkbox
                    "
                    >
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                    </div>
                    <div className="text-center">
                      <PopUpFeed
                        title="Authenticating"
                        message={
                          feedback.token
                            ? "loged In"
                            : "you are not yet authorized"
                        }
                        status=""
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default Login;

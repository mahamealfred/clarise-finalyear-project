import React, { useState } from "react";
import { register } from "../../dataStore/util/register/action/register";
import { useDispatch, useSelector } from "react-redux";
import PopUpFeed from "../../components/popup/popup";
const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const feedback = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(name, address, email, userName, password));
  };
  return (
    <>
      {/* <!-- Main content --> */}

      {/* <!-- Header --> */}
      <body class="bg-default">
        <div className="header bg-gradient-primary py-7 py-lg-4 pt-lg-4">
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
                          placeholder="full Name"
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </div>
                    </div>
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
                          placeholder="email"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </div>
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
                          placeholder="Phone Number"
                          type="ext"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                        />
                      </div>
                    </div>
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
                          placeholder="address"
                          type="text"
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
                        />
                      </div>
                    </div>
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
                        title="Authenticating..."
                        message={"check your email to confirm your account!!!"}
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
export default Register;

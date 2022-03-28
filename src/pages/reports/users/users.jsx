import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../constants/url";
const Users = () => {
  const [allUsers, setAlUsers] = useState([]);
  const getData = async () => {
    try {
      const responce = await axios.get(url.register);
      const responceData = responce.data.data;
      setAlUsers(responceData);
    } catch (error) {
      console.log("error is " + error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col">
          <div
            className="card bg-default shadow"
            style={{ position: "relative", top: -80, left: 10 }}
          >
            <div className="card-header bg-transparent border-0">
              <h3 className="text-white mb-0">Bussiness Categories</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="sort" data-sort="name">
                      name
                    </th>
                    <th scope="col" className="sort" data-sort="budget">
                      userName
                    </th>
                    <th scope="col" className="sort" data-sort="status">
                      Email
                    </th>

                    <th scope="col" className="sort" data-sort="completion">
                      Role
                    </th>
                    <th scope="col" className="sort" data-sort="completion">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  {allUsers.length != 0 ? (
                    allUsers.map((user) => (
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                {user.name}
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">{user.userName}</td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning"></i>
                            <span className="status">{user.email}</span>
                          </span>
                        </td>

                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning"></i>
                            <span className="status">{user.role}</span>
                          </span>
                        </td>

                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning"></i>
                            <span className="status">{user.address}</span>
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;

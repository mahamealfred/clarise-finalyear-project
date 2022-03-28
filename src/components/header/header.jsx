import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { url } from "../../constants/url";
import HeaderCard from "../cards/HeaderCard";
const Header = () => {
  const [approvedValues, setApproved] = useState(0);
  const [rejectedValues, setRejected] = useState(0);
  const [unFinishedValues, setUnFinished] = useState(0);
  const [totalValue, setTotal] = useState(0);
  const getData = async () => {
    let approved = 0;
    let rejected = 0;
    let unfinished = 0;
    try {
      const responce = await axios.get(url.businessIdea);
      let total = responce.data.data.length;
      for (const key in responce.data.data) {
        let status = responce.data.data[key].status;

        if (status === "approved") {
          approved = approved + 1;
        } else if (status === "rejected") {
          rejected = rejected + 1;
        } else {
          unfinished = unfinished + 1;
        }
      }
      setApproved(approved);
      setRejected(rejected);
      setUnFinished(unfinished);
      setTotal(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">Default</h6>
                <nav
                  aria-label="breadcrumb"
                  className="d-none d-md-inline-block ml-md-4"
                >
                  <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="fas fa-home"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Dashboards</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Default
                    </li>
                  </ol>
                </nav>
              </div>
              {/* <div className="col-lg-6 col-5 text-right">
                <a href="#" className="btn btn-sm btn-neutral">
                  New
                </a>
                <a href="#" className="btn btn-sm btn-neutral">
                  Filters
                </a>
              </div> */}
            </div>
            {/* <!-- Card stats --> */}
            <div className="row">
              <HeaderCard
                title="Total Ideas"
                value={totalValue}
                icon1="fab fa-ideal"
                persentage={3.48}
                icon2="fa fa-arrow-up"
                liveTime="Since last month"
              />
              <HeaderCard
                title="approved"
                value={approvedValues}
                icon1="far fa-thumbs-up"
                persentage={3.48}
                icon2="fa fa-arrow-up"
                liveTime="Since last month"
              />
              <HeaderCard
                title="Rejected"
                value={rejectedValues}
                icon1="fas fa-window-close"
                persentage={3.48}
                icon2="fa fa-arrow-up"
                liveTime="Since last month"
              />
              <HeaderCard
                title="Unfinished"
                value={unFinishedValues}
                icon1="fas fa-pause-circle"
                persentage={0.0}
                // icon2="fa fa-arrow-up"
                liveTime="Since last month"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

import React from "react";
const HeaderCard = (props) => {
  return (
    <>
      <div className="col-xl-3 col-md-6">
        <div className="card card-stats">
          {/* <!-- Card body --> */}
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">
                  {props.title}
                </h5>
                <span className="h2 font-weight-bold mb-0">{props.value}</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                  <i className={props.icon1}></i>
                </div>
              </div>
            </div>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2">
                <i className={props.icon2}></i>
                {props.persentage}%
              </span>
              <span className="text-nowrap">{props.liveTime}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderCard;

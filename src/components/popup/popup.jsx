import React from "react";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import "./popup.css";
export default function PopUpFeed(props) {
  const success = { background: "rgb(65, 121, 68)" };
  const fail = { background: "rgb(131, 66, 61)" };
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  const arrowStyle = { color: "#000" };
  let contentStyle = "";
  if (props.status === 201) {
    contentStyle = success;
  } else {
    contentStyle = fail;
  }
  const handleFinish = () => {
    window.location.reload();
  };
  const handleError = (event) => {
    event.target.style.display = "none";
  };
  return (
    <Popup
      trigger={<button className="btn btn-success btn-md">Submit</button>}
      modal
      position="right center"
      {...{
        PopUpFeed,
        // closeOnDocumentClick,
        contentStyle,
        // overlayStyle,
        arrowStyle,
      }}
    >
      <>
        <div className="content">
          <span style={{ color: "#fff" }}>{props.message}</span>
          <br />
          <button
            className="btn btn-sm center  btn-white"
            onClick={handleFinish}
          >
            <span>OK</span>
          </button>
        </div>
      </>
    </Popup>
  );
}

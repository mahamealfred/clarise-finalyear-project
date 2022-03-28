import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
const ModelPopUp = (props) => {
  const customStyles = {
    content: {
      top: "20%",
      left: "25%",
      right: "10%",
      background: "#fff",
      opacity: 1,
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
    },
    overlay: {
      backgroundColor: "rgba(238, 228, 248, 0.80)",
      // opacity: 0.8,
    },
  };
  return (
    <>
      <Modal isOpen={props.status} onRequestClose={true} style={customStyles}>
        <div className="modal-dialog modal-lg" role="document"></div>
      </Modal>
    </>
  );
};
export default ModelPopUp;

import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.querySelector("#modal")
  );
};

export default Modal;

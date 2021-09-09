import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { VscClose } from "react-icons/vsc";
import { FcInfo } from "react-icons/fc";

import NavigationContext from "../context/NavigationContext";

const Modal = ({ children, title }) => {
  const { isModalVisible, setIsModalVisible, setModalType } =
    useContext(NavigationContext);

  return ReactDOM.createPortal(
    <div
      className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 ${
        isModalVisible ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="p-6 bg-white rounded-lg max-w-sm w-full relative flex flex-col gap-5 items-start">
        <button
          onClick={(e) => {
            setIsModalVisible(!isModalVisible);
            setModalType(null);
          }}
          type="button"
          className="absolute -top-1 -right-1 rounded-full w-6 h-6 bg-red-500 flex justify-center items-center border border-gray-100"
        >
          <VscClose className="text-white" title="Close" />
        </button>
        <div className="flex gap-2 items-center">
          <FcInfo size="2rem" />
          <h3 className="text-xl font-bold">{title || null}</h3>
        </div>
        {children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

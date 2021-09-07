import React from "react";
import Modal from "./Modal";

const ModalWithButton = () => {
  return (
    <Modal>
      <p className="fixed top-0 bottom-0 h-full w-full z-50 bg-red-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quaerat
        tempore commodi praesentium harum vel eos voluptatum eveniet! Placeat
        nihil ipsum odit sed qui dolorum officia libero, in fugit natus!
      </p>
    </Modal>
  );
};

export default ModalWithButton;

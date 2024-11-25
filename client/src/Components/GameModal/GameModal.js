import React from "react";
import Modal from "react-modal";
import noel from "../../Images/noel.png";
import { FaTimes } from "react-icons/fa";
import {
  ModalContent,
  CloseButton,
  ModalImage,
  modalStyles,
} from "./GameModal.styles";

const GameModal = ({ isOpen, closeModal, modalMessage }) => {
  return (
    <Modal
      style={modalStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      appElement={document.getElementById("root")}
    >
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <FaTimes />
        </CloseButton>
        <ModalImage src={noel} alt="Resultado" />
        <p>{modalMessage}</p>
      </ModalContent>
    </Modal>
  );
};

export default GameModal;

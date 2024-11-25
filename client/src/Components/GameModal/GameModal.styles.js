import styled from "styled-components";

export const ModalContent = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const ModalImage = styled.img`
  max-width: 200px;
  margin-bottom: 20px;
`;

export const modalStyles = {
  content: {
    width: "40%",
    height: "35%",
    maxWidth: "90%",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
  },
};

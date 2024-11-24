import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  display: flex;
  position: relative;
  width: 60%;
  height: 40%;
  border-radius: 10px;
  min-height: 300px;
`;

export const Section = styled.div`
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 50%;
  right: 0px;
  height: 100%;
  border-radius: 0 10px 10px 0;
`;

export const SectionInput = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  position: relative;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 20%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
`;

export const Input = styled.input`
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  padding: 10px 20px;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.white};
  display: flex;
  bottom: 20%;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  gap: 5px;
`;

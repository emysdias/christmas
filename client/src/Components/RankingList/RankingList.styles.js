import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  display: flex;
  position: relative;
  width: 53%;
  height: 60%;
  border-radius: 10px;
  flex-direction: column;
  min-height: 300px;
  padding: 0 10px;
  overflow: auto;
  overflow-x: hidden;
`;

export const TitleCard = styled.div`
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  max-width: 560px;
  justify-content: space-around;
  width: 100%;
  display: flex;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;

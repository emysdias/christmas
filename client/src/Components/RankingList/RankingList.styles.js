import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  display: flex;
  position: relative;
  width: 50%;
  height: 60%;
  border-radius: 10px;
  flex-direction: column;
  min-height: 300px;
  padding: 0 10px;
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

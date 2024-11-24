import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

export const Card = styled.div`
  background-color: ${({ flipped, matched, theme }) =>
    matched ? theme.green : flipped ? theme.primary : theme.white};
  color: ${({ flipped, theme }) => (flipped ? theme.black : "transparent")};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 100px;
  cursor: ${({ matched }) => (matched ? "default" : "pointer")};
  box-shadow: 0 2px 5px ${({ theme }) => theme.black};
`;

export const TitleCard = styled.div`
  background-color: ${({ theme }) => theme.white};
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  max-width: 580px;
  width: 100%;
  display: flex;
`;

export const ResetButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;

export const Countdown = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  margin: 20px 0;
  background: ${({ theme }) => theme.white};
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  display: flex;
  padding: 5px;
  min-height: 40px;
`;

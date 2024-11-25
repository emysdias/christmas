import styled from "styled-components";

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
  padding: 10px 20px;
  gap: 10px;
  border-radius: 10px 10px 0 0;
  max-width: 560px;
  width: 100%;
  display: flex;
`;

export const ButtonCard = styled.div`
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 0 0 10px 10px;
  max-width: 560px;
  width: 100%;
  display: flex;
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

export const Countdown = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.white};
  max-width: 590px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  display: flex;
  padding: 5px;
  min-height: 40px;
`;

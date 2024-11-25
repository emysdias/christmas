import React from "react";
import {
  CardGrid,
  Card,
  TitleCard,
  ButtonCard,
  Button,
  Countdown,
} from "./MemoryGame.styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const MemoryGame = ({
  cards,
  flippedCards,
  matchedCards,
  time,
  isGameStarted,
  countdown,
  startGame,
  resetGame,
  handleCardClick,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToRanking = () => {
    navigate("/ranking");
  };

  return (
    <>
      <TitleCard>
        <h3>{t("game.title")}</h3>
        <p>
          {t("game.time")}
          {time}s
        </p>
      </TitleCard>
      {!isGameStarted && countdown === 0 && (
        <ButtonCard>
          <Button onClick={startGame}>{t("game.start")}</Button>
          <Button onClick={goToRanking}>{t("game.goToRanking")}</Button>
        </ButtonCard>
      )}
      {countdown > 0 && (
        <Countdown>
          {t("game.countdown")}
          {countdown}
        </Countdown>
      )}
      {countdown === 0 && isGameStarted && (
        <CardGrid>
          {cards.map((card) => (
            <Card
              key={card.id}
              flipped={
                flippedCards.includes(card.id) || matchedCards.includes(card.id)
              }
              matched={matchedCards.includes(card.id)}
              onClick={() => handleCardClick(card.id)}
            >
              {card.icon}
            </Card>
          ))}
        </CardGrid>
      )}
      {countdown === 0 && isGameStarted && (
        <ButtonCard>
          <Button onClick={resetGame}>{t("game.reset")}</Button>
          <Button onClick={goToRanking}>{t("game.goToRanking")}</Button>
        </ButtonCard>
      )}
    </>
  );
};

export default MemoryGame;

import React from "react";
import {
  CardGrid,
  Card,
  TitleCard,
  ResetButton,
  StartButton,
  Countdown,
} from "./MemoryGame.styles";
import { useTranslation } from "react-i18next";

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
        <StartButton onClick={startGame}>{t("game.start")}</StartButton>
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
        <ResetButton onClick={resetGame}>{t("game.reset")}</ResetButton>
      )}
    </>
  );
};

export default MemoryGame;

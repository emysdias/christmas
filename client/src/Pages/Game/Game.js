import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  CardGrid,
  Card,
  TitleCard,
  ResetButton,
  StartButton,
  Countdown,
} from "./Game.styles";
import {
  FaTree,
  FaGift,
  FaSnowman,
  FaCandyCane,
  FaStar,
  FaSnowflake,
  FaBell,
  FaHatWizard,
  FaMitten,
  FaSleigh,
} from "react-icons/fa";

const icons = [
  <FaTree />,
  <FaGift />,
  <FaSnowman />,
  <FaCandyCane />,
  <FaStar />,
  <FaSnowflake />,
  <FaBell />,
  <FaHatWizard />,
  <FaMitten />,
  <FaSleigh />,
];

const Game = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [time, setTime] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let timer;
    if (isGameStarted) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameStarted]);

  const initializeGame = useCallback(() => {
    const shuffledCards = shuffleCards([...icons, ...icons]);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setTime(0);
    setIsGameStarted(false);
    setCountdown(0);
  }, []);

  const shuffleCards = (cards) => {
    return cards
      .map((icon) => ({
        id: Math.random(),
        icon,
        flipped: false,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    if (
      flippedCards.length === 2 ||
      matchedCards.includes(id) ||
      !isGameStarted
    ) {
      return;
    }

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      checkForMatch(newFlipped);
    }
  };

  const checkForMatch = (newFlipped) => {
    const [first, second] = newFlipped.map((cardId) =>
      cards.find((card) => card.id === cardId)
    );

    if (first.icon === second.icon) {
      setMatchedCards((prev) => [...prev, first.id, second.id]);
    }

    setTimeout(() => {
      setFlippedCards([]);
    }, 1000);
  };

  const startGame = () => {
    setCountdown(3);
    let counter = 3;
    const countdownInterval = setInterval(() => {
      counter -= 1;
      setCountdown(counter);
      if (counter === 0) {
        clearInterval(countdownInterval);
        setIsGameStarted(true);
        setCountdown(0);
        setTime(0);
      }
    }, 1000);
  };

  const resetGame = () => {
    setTime(0);
    setIsGameStarted(false);
    startGame();
  }

  return (
    <Container>
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
    </Container>
  );
};

export default Game;

import React, { useState, useEffect, useCallback } from "react";
import { Container } from "./Game.styles";
import { MemoryGame } from "../../Components";
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
        flipped: [],
        matched: [],
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
    initializeGame();
    startGame();
  };

  return (
    <Container>
      <MemoryGame
        cards={cards}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        time={time}
        isGameStarted={isGameStarted}
        countdown={countdown}
        startGame={startGame}
        resetGame={resetGame}
        handleCardClick={handleCardClick}
      />
    </Container>
  );
};

export default Game;

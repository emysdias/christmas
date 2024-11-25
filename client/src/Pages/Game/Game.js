import React, { useState, useEffect, useCallback } from "react";
import { Container } from "./Game.styles";
import { MemoryGame, GameModal } from "../../Components";
import api from "../../Services";
import * as FaIcons from "react-icons/fa";

const iconNames = [
  "FaTree",
  "FaGift",
  "FaSnowman",
  "FaCandyCane",
  "FaStar",
  "FaSnowflake",
  "FaBell",
  "FaHatWizard",
  "FaMitten",
  "FaSleigh",
];

const icons = iconNames.map(iconName => {
  const IconComponent = FaIcons[iconName];
  return <IconComponent />;
});

const Game = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [time, setTime] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    let timer;
    if (isGameStarted) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isGameStarted]);

  const initializeGame = useCallback(() => {
    const shuffledCards = shuffleCards([...icons, ...icons]);
    setCards(shuffledCards);
    resetGameState();
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const resetGameState = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setTime(0);
    setIsGameStarted(false);
    setCountdown(0);
  };

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
      }
    }, 1000);
  };

  const handleCardClick = (id) => {
    if (!isValidCardClick(id)) return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) checkForMatch(newFlipped);
  };

  const isValidCardClick = (id) => {
    return (
      flippedCards.length < 2 && !matchedCards.includes(id) && isGameStarted
    );
  };

  const checkForMatch = (newFlipped) => {
    const [first, second] = newFlipped.map((cardId) => findCardById(cardId));
    if (first.icon === second.icon) markCardsAsMatched(first, second);
    setTimeout(() => setFlippedCards([]), 1000);
  };

  const findCardById = (id) => cards.find((card) => card.id === id);

  const markCardsAsMatched = (first, second) => {
    setMatchedCards((prev) => [...prev, first.id, second.id]);
  };

  const sendGameResult = useCallback(async () => {
    const name = sessionStorage.getItem("username");
    if (!name) return;

    try {
      const response = await api.post("/ranking", { name, time });
      setModalMessage(response.data.message);
      setIsModalOpen(true);
      resetGameState();
    } catch (error) {
      console.error("Erro ao enviar resultado:", error);
    }
  }, [time]);

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      sendGameResult();
    }
  }, [matchedCards, cards, sendGameResult]);

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
      <GameModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        modalMessage={modalMessage}
      />
    </Container>
  );
};

export default Game;

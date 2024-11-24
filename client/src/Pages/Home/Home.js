import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./Home.styles";
import { LoginForm } from "../../Components";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import api from "../../Services";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleInputChange = (event) => {
    const value = event.target.value;

    setUsername(value);
  };

  const handleClick = async () => {
    if (!username.trim()) {
      toast.error(t("home.error.userName"));
      return;
    }

    try {
      await api.post("/user", { name: username });
      sessionStorage.setItem('username', username);
    } catch (error) {
      console.error(error);
    } finally {
      toast.success(t("home.success.login"));
      navigate("/game");
    }
  };

  return (
    <Container>
      <LoginForm
        username={username}
        onUsernameChange={handleInputChange}
        onPlay={handleClick}
      />
    </Container>
  );
};

export default Home;

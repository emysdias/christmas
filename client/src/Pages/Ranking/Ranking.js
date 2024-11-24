import React, { useState, useEffect } from "react";
import { Container } from "./Ranking.styles";
import { RankingList } from "../../Components";
import api from "../../Services";

const Ranking = () => {
  const [rankingList, setRankingList] = useState([]);

  const getRankingList = async () => {
    try {
      const result = await api.get("/ranking");
      setRankingList(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRankingList();
  }, []);

  return (
    <Container>
      <RankingList rankingList={rankingList} />
    </Container>
  );
};

export default Ranking;

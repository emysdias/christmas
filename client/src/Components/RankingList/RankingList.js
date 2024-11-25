import { Container, TitleCard, ListItem, Button } from "./RankingList.styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const RankingList = ({ rankingList }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game");
  };

  return (
    <>
      <Container>
        <TitleCard>
          <h3>{t("ranking.user")}</h3>
          <h3>{t("ranking.time")}</h3>
        </TitleCard>

        {rankingList && rankingList.length > 0 ? (
          rankingList.map((player) => (
            <ListItem key={player._id}>
              <p>{player.name}</p>
              <p>{player.time} s</p>
            </ListItem>
          ))
        ) : (
          <p>{t("ranking.empty")}</p>
        )}
      </Container>
      <Button onClick={goToGame}>{t("ranking.backToGame")}</Button>
    </>
  );
};

export default RankingList;

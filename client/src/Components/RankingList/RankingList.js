import { Container, TitleCard, ListItem } from "./RankingList.styles";
import { useTranslation } from "react-i18next";

const RankingList = ({ rankingList }) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default RankingList;

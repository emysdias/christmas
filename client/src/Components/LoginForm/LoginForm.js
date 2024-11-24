import {
  Button,
  Container,
  Section,
  Image,
  SectionInput,
  Input,
  Label,
} from "./LoginForm.styles";
import { CiPlay1 } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import tree from "../../Images/tree.png";

const LoginForm = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    alert("Oi");
  };

  return (
    <Container>
      <Image src={tree} alt="tree" />
      <Section>
        <SectionInput>
          <Label htmlFor="username">{t("home.username")}</Label>
          <Input type="text" name="username" />
        </SectionInput>
        <Button onClick={handleClick}>
          {t("home.play")}
          <CiPlay1 />
        </Button>
      </Section>
    </Container>
  );
};

export default LoginForm;

import { ANSWERS_PATH, LOGIN_PATH, QUESTIONS_PATH, REGISTER_PATH } from "../../routes/const";
import { Container, Title, NavigateContainer } from "../../styles/TopBarStyles";

const TopBar = () => {
  return (
    <Container>
        <Title>
            <a href="/">Niekada Forum</a>
        </Title>
        <NavigateContainer>
            <a href={LOGIN_PATH}>Login</a>
            <a href={REGISTER_PATH}>Register</a>
            <a href={QUESTIONS_PATH}>Questions</a>
            <a href={ANSWERS_PATH}>Answers</a>
        </NavigateContainer>
    </Container>
  );
};

export default TopBar;
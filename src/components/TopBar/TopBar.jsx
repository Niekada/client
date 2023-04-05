import styled from "styled-components";
import { MainColor, BgColor } from "../../consts/Colors";

const TopBar = () => {
  return (
    <Container>
        <Title>
            <a href="/">Niekada Forum</a>
        </Title>
        <NavigateContainer>
            <a href="/Login">Login</a>
            <a href="/Register">Register</a>
            <a href="/Questions">Questions</a>
            <a href="/Answers">Answers</a>
        </NavigateContainer>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.div`

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 34px;
    color: ${MainColor};
  }
`;

const NavigateContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 34px;
    color: ${BgColor};
}
`;

export default TopBar;
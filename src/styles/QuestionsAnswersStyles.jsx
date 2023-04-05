import { MainColor, BgColor } from '../assets/Colors';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

export const MainContainer = styled.div`
  width: 75%;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loading = styled.p`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

export const Inputs = styled.div`
  width: 75%;
  margin: 20px;

  input {
    width: 80%;
    height: 30px;
    border: 2px solid ${MainColor};
    border-radius: 5px;
    background-color: ${BgColor};
    color: ${MainColor};
    font-weight: 600;
    }
`;

export const AddButton = styled.button`
  text-align: center;
  width: 250px;
  height: 50px;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  background-color: ${BgColor};

  a {
    font-weight: 700;
    font-size: 34px;
    color: ${MainColor};
    text-decoration: none;
    }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SmallButtons = styled.button`
  text-align: center;
  width: 70px;
  height: 20px;
  color: ${MainColor};
  border: 2px solid ${MainColor};
  border-radius: 5px;
  background-color: ${BgColor};
  font-size: 12px;

  a {
    color: ${MainColor};
    text-decoration: none
    }
`;
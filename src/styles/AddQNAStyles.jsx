import { MainColor, BgColor } from '../assets/Colors';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Add = styled.p`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

export const SecondaryContainer = styled.div`
  width: 100%;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  height: 200px; 
  width: 500px;
  background-color: ${BgColor};
  color: ${MainColor};
  font-weight: 600;
`;

export const AddButton = styled.button`
  margin-top: 24px;
  text-align: center;
  width: 250px;
  height: 50px;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  background-color: ${BgColor};
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};

  &:active {
    transform: translateY(4px);
  }
`;
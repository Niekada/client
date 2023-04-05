import { MainColor, BgColor } from '../consts/Colors';
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
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
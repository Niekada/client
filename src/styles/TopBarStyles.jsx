import { MainColor, BgColor } from '../assets/Colors';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 34px;
    color: ${MainColor};
    }
`;

export const NavigateContainer = styled.div`
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
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media screen and (max-width: 991px) {
        padding-right: 16px;
        padding-left: 16px;
    }
`;

export const Button = styled(Link)`
    width: 100%;
    height: 48px;
    padding: 8px 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ outlined }) => (outlined ? 'white' : '#FF7139')};
    background-color: ${({ outlined }) => (outlined ? 'transparent' : 'white')};
    border: ${({ outlined }) => (outlined ? '2px solid white' : '')};
    border-radius: 50px;
    text-decoration: none;
`;

export const Headline = styled.h2`
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '48px')};
    color: ${({ color }) => (color ? color : 'white')};
    font-weight: ${({ bold }) => (bold ? '400' : '300')};
    text-align: ${({ center }) => (center ? 'center' : '')};
    font-family: 'Roboto', sans-serif;
    margin-bottom: ${({ margin }) => (margin ? margin : '')};
    @media screen and (max-width: 960px) {
    font-size: 32px;
    }
`;

export const TextLine = styled.p`
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
    color: ${({ color }) => (color ? color : 'white')};
    font-weight: ${({ bold }) => (bold ? '600' : '400')};
    text-align: ${({ center }) => (center ? 'center' : '')};
    font-family: 'Roboto', sans-serif;
    line-height: 24px;
    margin-bottom: ${({ margin }) => (margin ? margin : '')};
    @media screen and (max-width: 960px) {
    font-size: 16px;
    }
`;

export default GlobalStyle;

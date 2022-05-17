import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const Container = styled.ul`
    width:  100%;
    height: auto;
    text-align:left;
    outline: 2px solid black;
`;

export const P = styled(Link)`
    width:          100%;
    height:         auto;
    text-align:     left;
    text-decoration:none;
    color:          black;
    outline:        2px solid orange;
`;

export const Ol = styled.li`
    width:      100%;
    padding:    0 0 0 0%;
    outline:    2px solid blue;
`;
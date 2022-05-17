import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  height: 2rem;
  transition: all ease 0.3s;
  border-left: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    margin-left: 0.5rem;
    border-left: 2px solid #42a5f5;
    padding-left: 0.25rem;
    background: gray ;
    border-radius: 5px ;
  }
`;

export const NavItemText = styled.p`
color:black;
&:hover {
    color:white;
};
`
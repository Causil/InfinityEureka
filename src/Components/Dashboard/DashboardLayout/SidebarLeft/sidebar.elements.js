import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 90vh;
  min-height: 100%;
  top: 0;
  padding: 1rem;
  transition: width ease 0.5s;
  width: ${({ open }) => (open ? '12rem' : '20%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  -webkit-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const WraperSidebar = styled.div`
  width: 100%;
  height: auto;
`;

export const WraperSubmenu = styled.div`
  width: 100%;
  padding: 0 0 0 0%;
  //outline: 2px solid blue;
`
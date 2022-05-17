import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 90vh;
  min-height: 100%;
  top: 0;
  padding: 1rem;
  transition: width ease 0.5s;
  width: ${({ open }) => (open ? '12rem' : '30%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  -webkit-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
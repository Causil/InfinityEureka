import React from 'react'
import {
    MainContainer as Container,
} from './MainContainer.elements';
const MainContainer = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default MainContainer;
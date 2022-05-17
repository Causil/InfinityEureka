import React from 'react'
import {
  Container,
  Span,
} from './Definition.elements';
const Definition = ({tittle,children}) => {
  return (
    <Container>
      <p>
        <Span> {tittle} </Span>
        {children}
      </p>
    </Container>
  )
}

export default Definition
import React from 'react';
import Paragraphs from '../Paragraphs/Paragraphs';
import Definition from '../../MathJx/Definition/Definition';
import Equation from '../../MathJx/Equation/Equation';

import {
Container,
H2
} from './BoardsElements';

import Section from '../../MathJx/Section/Section';
//import Def from '../../MathJx/Definition2/Definition';
import MathJax from 'react-mathjax';
const Boards = ({tittle,children}) => {
    return (
      <MathJax.Provider>
      <>
        <H2> {tittle} 1 </H2>
        {children}
      </>
      </MathJax.Provider>
    );
}

export default Boards;

/*
<Section tittle={'1.2 Open and Closed Sets'}>
          <Paragraphs>
              Balls in Euclidean spaces are defined in terms of distances.
              This means that they have a natural generalisation to metric spaces.
              The concepts of open and closed sets are are closely related to this.
          </Paragraphs>
          <Definition tittle={'Definicion 1.19:'}>
              Let `(X,d)`
              be a metric space. Let `x_0 \in X`
              and `r {'>'} 0`. Then
              <Equation>
                  {
                  `
                  \\begin{equation}
                  B_{r}(x_0)= \\lbrace x\\in X \\colon d(x_0 ,x)<r \\rbrace
                  \\end{equation}
                  `
                  }
              </Equation>
              is called the  open ball in `X` of radius
              `r` and centre `x_0`
          </Definition>
          <Definition tittle={'Example 1.23.'}>
                Let `a{'<'}b`. The interval `(a,b)` is open in
                <MathJax.Node inline formula={'\\mathbb{R}'} />
                and `[a,b]` is closed (because `(-\infty,a)\cup (b,\infty)` is open),
                but the `(a,b]` and `[a,b)` are neither open closed.
          </Definition>
        </Section>
*/
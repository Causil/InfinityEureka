import React from 'react'
import {useSection} from '../../Hooks/useSection';
import Boards from '../../Components/Boards/Boards';
import Section from '../../MathJx/Section/Section';
import Paragraphs from '../../Components/Paragraphs/Paragraphs';
import Equation from '../../MathJx/Equation/Equation';
import Definition from '../../MathJx/Definition/Definition';
const Introduction = () => {
  return (
    <Section tittle=" 1.1 Espacios topológicos">
    <Definition tittle={'Definicion 1.1.1:'}>
        Una topología sobre un conjunto no vacío `X` es una colección ` &U1D4E3&
            <Equation >
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
      <Definition tittle={'Definicion 1.1.1:'}>
            Let `(X,d)`
            be a metric space. Let `x_0 \in X`
            and `r {'>'} 0`. Then
            <Equation >
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
        <div id="espaciostopologicos">
          Hola mundo
        </div>
    </Section>
  )
}

export default Introduction

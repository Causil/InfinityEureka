import MathJax from 'react-mathjax';
import {
  Container,H2,P
} from './DefinitionElements';
const MathEquation = ({tex}) => {
    return (
        <MathJax.Provider>
            <Container>
                <P>
                    Open and closed. `x_0 \in X`
                    {`
                    $$
                        x^{\\infty}
                    $$
                    `}
                </P>
            </Container>
        </MathJax.Provider>
    );
}

export default MathEquation;
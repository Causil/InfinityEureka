import MathJax from 'react-mathjax';
import {Container,H1} from './Math.elements';
const Chapter = ({tittle,children}) => {
    return (
        <MathJax.Provider>
            <Container>
                <H1>{tittle}</H1>
                {children}
            </Container>
        </MathJax.Provider>
    );
}

export default Chapter;
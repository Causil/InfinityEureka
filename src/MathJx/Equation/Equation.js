import React from 'react';
import MathJax from 'react-mathjax';

const MathEquation = ({children}) => {

    return (
        <MathJax.Provider>
            <>
                <MathJax.Node formula={children} />
            </>
        </MathJax.Provider>
    );
}

export default MathEquation;
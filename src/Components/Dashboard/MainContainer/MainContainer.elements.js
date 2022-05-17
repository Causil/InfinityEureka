import styled from 'styled-components';

export const MainContainer = styled.div`
    width:            ${({ width })=> ( width ? width:"100%" )};
    max-width:        1700px;
    display:          ${({ display })=> ( display ? display:"flex" )};
    justify-content:  center;
    align-items:      center;
    //border:           2px solid black;
    height:           ${({ height })=> ( height ? height:"90vh" )};
    overflow:         ${({ overflow })=> ( overflow ? overflow:"hidden" )};
    background-color: ${({ background })=> ( background ? background:"white" )};
`
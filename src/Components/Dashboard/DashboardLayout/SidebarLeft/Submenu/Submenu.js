import React from 'react';
import {
    Container,
    P,
    Ol
} from './Submenu.elements';
const Submenu = ({route,children}) => {
    return(
    <Container>
        <Ol>
            <P to="/#espaciostopologicos" >
                {children}
            </P>
        </Ol>
    </Container>
    )
}
export default Submenu;
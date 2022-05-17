import React from 'react';
import {
    NavItemContainer,
    NavItemText
} from './Menu.elements';
const Menu = ({to,children,setSubmenu,submenu}) => {
return (
    <NavItemContainer
        to={to}
        onClick={(e)=>setSubmenu(!submenu)}
    >
        <NavItemText>
            {children}
        </NavItemText>
    </NavItemContainer>
)
}

export default Menu;
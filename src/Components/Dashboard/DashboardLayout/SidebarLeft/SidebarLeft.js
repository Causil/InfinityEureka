import React from 'react'
import Menu from './Menu';
import Submenu from './Submenu/Submenu';
import {
    SidebarContainer,
    WraperSidebar,
    WraperSubmenu
} from './sidebar.elements';
const Sidebar = ({open,setOpen}) => {
const [submenuTopologia,setSubmenutopo] = React.useState(false);
const [submenuAnalisis,setSubmenuanalisis] = React.useState(false);
const [submenumedida,setSubmenumedida] = React.useState(false);
return (
    <SidebarContainer open={open}>
        <WraperSidebar>
            <Menu
            to="/topologia"
            setSubmenu = {setSubmenutopo}
            submenu={submenuTopologia}
            >
                Topología
            </Menu>
            {submenuTopologia
            ?<WraperSubmenu>
                <Submenu >
                    Espacios topológicos
                </Submenu>
                <Submenu> Base de una topología  </Submenu>
                <Submenu> Ejercicios  </Submenu>
            </WraperSubmenu>
            :""}
            <Menu
            to="/analisis"
            setSubmenu = {setSubmenuanalisis}
            submenu={submenuAnalisis}
            >
                Analísis
            </Menu>
            {submenuAnalisis? "Capítulo 1":""}
            <Menu
            to="/medida"
            setSubmenu = {setSubmenumedida}
            submenu={submenumedida}
            >
                Teoría de la medida
            </Menu>
            {submenumedida? "Capítulo 1":""}
        </WraperSidebar>
    </SidebarContainer>
)
}

export default Sidebar
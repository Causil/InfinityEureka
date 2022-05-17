import React, {useState} from 'react'
import MainContainer from '../MainContainer/MainContainer';
import SidebarLeft from './SidebarLeft/SidebarLeft';
import SidebarRight  from './SidebarRight/SidebarRight';
//open,setOpen
import {ContainerDashboard} from './DashboardLayout.elements';
const DashboardLayout = ({children}) => {
  const [open,setOpen] = useState(true);
  return (
    <MainContainer height="90vh" >
      <SidebarLeft open={open} setOpen={setOpen}/>
      <ContainerDashboard>
        {children}
      </ContainerDashboard>
      <SidebarRight />
    </MainContainer>
  )
}

export default DashboardLayout